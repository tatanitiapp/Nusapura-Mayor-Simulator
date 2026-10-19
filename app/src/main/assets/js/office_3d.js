/**
 * ============================================================================
 * NUSAPURA: 3D MAYOR'S EXECUTIVE CHAMBER (RUANG KERJA WALIKOTA)
 * ============================================================================
 * High-performance Three.js WebGL viewport with Free-Roam Walking (Opsi 2).
 * Features:
 * - Virtual Joystick touch controls & Keyboard WASD for walking exploration.
 * - 360-degree look-around touch camera with realistic head bobbing.
 * - Solid furniture collision physics (room walls, executive desk).
 * - Official Kota Nusapura Civic Emblem & Shield installed on wall, desk, & flag.
 * - Dynamic Day / Sunset / Night lighting and Raycast object interaction.
 * ============================================================================
 */

const Office3D = (function () {
  let isInitialized = false;
  let isOpen = false;

  let scene, camera, renderer, animFrameId;
  let canvasContainer, canvas;
  let interactiveObjects = [];
  let raycaster, mouse;

  // Camera & Player Physics (Free-Roam Walking)
  let playerPos = { x: 0, y: 1.65, z: 1.4 }; // Initial seated position behind desk
  let isSittingAtDesk = true;
  let moveSpeed = 2.6; // meters per second
  let walkCycle = 0;
  let isMoving = false;

  let cameraRotation = { yaw: 0, pitch: -0.1 };
  let targetRotation = { yaw: 0, pitch: -0.1 };

  // Touch Camera Look Drag State
  let isLookDragging = false;
  let lookTouchId = null;
  let lastLookPos = { x: 0, y: 0 };

  // Virtual Joystick State
  let joystickActive = false;
  let joystickTouchId = null;
  let joystickCenter = { x: 0, y: 0 };
  let joystickVector = { x: 0, y: 0 }; // Normalized (-1 to +1)
  let joystickMaxRadius = 38;

  // Keyboard controls
  let keys = { w: false, a: false, s: false, d: false };

  // Environment & Props
  let timeOfDay = 'day'; // 'day', 'sunset', 'night'
  let clouds = [];
  let deskLampLight = null;
  let sunLight = null;
  let ambientLight = null;
  let windowBackgroundMesh = null;
  let hoveredObject = null;
  let clock = null;

  function getThree() {
    if (typeof THREE !== 'undefined') return THREE;
    if (typeof window !== 'undefined' && window.THREE) return window.THREE;
    return null;
  }

  function init() {
    if (isInitialized) return;
    const THREE = getThree();
    if (!THREE) {
      console.warn('Three.js library not loaded yet!');
      return;
    }

    canvasContainer = document.getElementById('office3dContainer');
    if (!canvasContainer) {
      console.error('office3dContainer element not found');
      return;
    }

    clock = new THREE.Clock();
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    // 1. Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a1122);
    scene.fog = new THREE.FogExp2(0x0a1122, 0.025);

    // 2. Camera setup
    camera = new THREE.PerspectiveCamera(
      58,
      canvasContainer.clientWidth / (canvasContainer.clientHeight || 1),
      0.1,
      100
    );
    camera.position.set(playerPos.x, playerPos.y, playerPos.z);
    camera.rotation.order = 'YXZ';
    camera.rotation.set(cameraRotation.pitch, cameraRotation.yaw, 0);

    // 3. Renderer setup
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    canvas = renderer.domElement;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    canvas.style.touchAction = 'none';
    canvasContainer.appendChild(canvas);

    // 4. Build 3D World & Assets
    setupLighting();
    buildRoomArchitecture();
    buildWindowSkyline();
    buildExecutiveDesk();
    buildOfficialLogoPlaques(); // Nusapura Official Civic Seal
    buildDeskAccessories();
    buildOfficeFurnishings();

    // 5. Setup Controls & Virtual Joystick
    setupInputEvents();
    setupVirtualJoystick();

    isInitialized = true;
    console.log('🏛️ Office3D Executive Chamber with Free-Roam Walking initialized!');
  }

  function setupLighting() {
    const THREE = getThree();
    ambientLight = new THREE.AmbientLight(0xfff3e0, 0.65);
    scene.add(ambientLight);

    sunLight = new THREE.DirectionalLight(0xfffaed, 1.25);
    sunLight.position.set(-2.5, 4.8, -5);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);

    deskLampLight = new THREE.PointLight(0xffb042, 1.6, 3.8, 2);
    deskLampLight.position.set(-0.85, 1.5, -0.4);
    deskLampLight.castShadow = true;
    scene.add(deskLampLight);

    const backFill = new THREE.PointLight(0x82b1ff, 0.45, 4.5, 2);
    backFill.position.set(0, 2.3, 1.8);
    scene.add(backFill);
  }

  function buildRoomArchitecture() {
    const THREE = getThree();

    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x3d2114, // Dark mahogany parquet
      roughness: 0.35,
      metalness: 0.1
    });

    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x18243b, // Royal navy executive wainscoting
      roughness: 0.8,
      metalness: 0.05
    });

    const ceilingMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.9
    });

    const goldTrimMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.3,
      metalness: 0.85
    });

    // Floor
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(8, 8.5), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true;
    scene.add(floor);

    // Ceiling
    const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(8, 8.5), ceilingMat);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = 3.6;
    scene.add(ceiling);

    // Back Wall (Behind desk with window opening)
    const wallBackL = new THREE.Mesh(new THREE.BoxGeometry(2.3, 3.6, 0.2), wallMat);
    wallBackL.position.set(-2.85, 1.8, -4);
    wallBackL.receiveShadow = true;
    scene.add(wallBackL);

    const wallBackR = new THREE.Mesh(new THREE.BoxGeometry(2.3, 3.6, 0.2), wallMat);
    wallBackR.position.set(2.85, 1.8, -4);
    wallBackR.receiveShadow = true;
    scene.add(wallBackR);

    // Top arch header above window
    const wallBackTop = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.8, 0.2), wallMat);
    wallBackTop.position.set(0, 3.2, -4);
    scene.add(wallBackTop);

    // Bottom wainscot below window
    const wallBackBot = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.6, 0.25), wallMat);
    wallBackBot.position.set(0, 0.3, -4);
    scene.add(wallBackBot);

    // Gold crown moulding
    const trimTop = new THREE.Mesh(new THREE.BoxGeometry(8, 0.08, 0.1), goldTrimMat);
    trimTop.position.set(0, 3.4, -3.9);
    scene.add(trimTop);

    // Side & Front Entrance Walls
    const wallLeft = new THREE.Mesh(new THREE.BoxGeometry(0.2, 3.6, 8.5), wallMat);
    wallLeft.position.set(-4, 1.8, 0);
    wallLeft.receiveShadow = true;
    scene.add(wallLeft);

    const wallRight = new THREE.Mesh(new THREE.BoxGeometry(0.2, 3.6, 8.5), wallMat);
    wallRight.position.set(4, 1.8, 0);
    wallRight.receiveShadow = true;
    scene.add(wallRight);

    // Front Wall (Behind player / Room Entrance with double mahogany doors)
    const wallFront = new THREE.Mesh(new THREE.BoxGeometry(8, 3.6, 0.2), wallMat);
    wallFront.position.set(0, 1.8, 4.2);
    wallFront.receiveShadow = true;
    scene.add(wallFront);

    // Double Mahogany Doors at the back
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.3, metalness: 0.1 });
    const doorL = new THREE.Mesh(new THREE.BoxGeometry(0.9, 2.4, 0.05), doorMat);
    doorL.position.set(-0.48, 1.2, 4.08);
    scene.add(doorL);

    const doorR = new THREE.Mesh(new THREE.BoxGeometry(0.9, 2.4, 0.05), doorMat);
    doorR.position.set(0.48, 1.2, 4.08);
    scene.add(doorR);

    // Brass door handles
    const handleMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.2 });
    const handleL = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.25, 8), handleMat);
    handleL.position.set(-0.1, 1.15, 4.03);
    scene.add(handleL);

    const handleR = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.25, 8), handleMat);
    handleR.position.set(0.1, 1.15, 4.03);
    scene.add(handleR);

    // Window mullions & sill
    const windowFrameMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.4, metalness: 0.5 });
    [-1.2, 0, 1.2].forEach(x => {
      const mullion = new THREE.Mesh(new THREE.BoxGeometry(0.06, 2.3, 0.06), windowFrameMat);
      mullion.position.set(x, 1.75, -3.95);
      scene.add(mullion);
    });
    const transom = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.06, 0.06), windowFrameMat);
    transom.position.set(0, 2.1, -3.95);
    scene.add(transom);

    const sillMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.2, metalness: 0.1 });
    const sill = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.1, 0.4), sillMat);
    sill.position.set(0, 0.6, -3.85);
    sill.receiveShadow = true;
    scene.add(sill);

    // Garuda Pancasila emblem at the top arch
    const garudaMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0xb8860b,
      emissiveIntensity: 0.25
    });
    const garuda = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.35, 0.05), garudaMat);
    garuda.position.set(0, 3.32, -3.88);
    scene.add(garuda);
  }

  function buildWindowSkyline() {
    const THREE = getThree();

    const skyGeo = new THREE.PlaneGeometry(16, 9);
    const skyMat = new THREE.MeshBasicMaterial({ color: 0x2563eb });
    windowBackgroundMesh = new THREE.Mesh(skyGeo, skyMat);
    windowBackgroundMesh.position.set(0, 3, -12);
    scene.add(windowBackgroundMesh);

    const cityGroup = new THREE.Group();
    const bldgColors = [0x1e293b, 0x334155, 0x0f172a, 0x475569];

    for (let i = -14; i <= 14; i += 1.3) {
      const height = 2.5 + Math.abs(Math.sin(i * 1.5)) * 4.5;
      const width = 0.9 + (Math.abs(Math.cos(i)) * 0.6);
      const bColor = bldgColors[Math.floor(Math.abs(i * 3)) % bldgColors.length];

      const bGeo = new THREE.BoxGeometry(width, height, 1.2);
      const bMat = new THREE.MeshStandardMaterial({ color: bColor, roughness: 0.5, metalness: 0.2 });
      const bldg = new THREE.Mesh(bGeo, bMat);
      bldg.position.set(i + (Math.sin(i) * 0.3), height / 2 - 0.5, -9 - (Math.abs(i) * 0.2));
      cityGroup.add(bldg);

      if (Math.abs(i) % 2 === 0) {
        const spire = new THREE.Mesh(
          new THREE.CylinderGeometry(0.02, 0.05, 0.8, 6),
          new THREE.MeshBasicMaterial({ color: 0xef4444 })
        );
        spire.position.set(bldg.position.x, height - 0.1, bldg.position.z);
        cityGroup.add(spire);
      }
    }
    scene.add(cityGroup);

    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.9,
      transparent: true,
      opacity: 0.85
    });

    for (let c = 0; c < 5; c++) {
      const cloud = new THREE.Group();
      for (let p = 0; p < 4; p++) {
        const puff = new THREE.Mesh(new THREE.DodecahedronGeometry(0.5 + p * 0.15, 1), cloudMat);
        puff.position.set((p - 1.5) * 0.5, Math.sin(p) * 0.2, 0);
        cloud.add(puff);
      }
      cloud.position.set(-8 + c * 4, 3.5 + Math.sin(c) * 0.8, -10 + c * 0.5);
      cloud.userData = { speed: 0.003 + (c % 3) * 0.002 };
      clouds.push(cloud);
      scene.add(cloud);
    }
  }

  function buildExecutiveDesk() {
    const THREE = getThree();
    const deskGroup = new THREE.Group();

    const deskMat = new THREE.MeshStandardMaterial({
      color: 0x4a2511, // Rich cherry mahogany
      roughness: 0.25,
      metalness: 0.1
    });

    const goldAccentMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.9,
      roughness: 0.2
    });

    // Main Desk Top Slab
    const deskTop = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.08, 1.2), deskMat);
    deskTop.position.set(0, 1.05, -0.4);
    deskTop.castShadow = true;
    deskTop.receiveShadow = true;
    deskGroup.add(deskTop);

    // Gold Trim edge around desk top
    const trimFront = new THREE.Mesh(new THREE.BoxGeometry(2.42, 0.02, 0.02), goldAccentMat);
    trimFront.position.set(0, 1.05, 0.21);
    deskGroup.add(trimFront);

    // Leather desk writing blotter
    const padMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.6 });
    const pad = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.01, 0.7), padMat);
    pad.position.set(0, 1.1, -0.35);
    pad.receiveShadow = true;
    deskGroup.add(pad);

    // Desk Pedestals (Left & Right drawers)
    const pedGeo = new THREE.BoxGeometry(0.55, 1.02, 1.1);
    const pedL = new THREE.Mesh(pedGeo, deskMat);
    pedL.position.set(-0.85, 0.51, -0.4);
    pedL.castShadow = true;
    pedL.receiveShadow = true;
    deskGroup.add(pedL);

    const pedR = new THREE.Mesh(pedGeo, deskMat);
    pedR.position.set(0.85, 0.51, -0.4);
    pedR.castShadow = true;
    pedR.receiveShadow = true;
    deskGroup.add(pedR);

    // Front Privacy Modesty Panel (Facing room entrance)
    const modPanel = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.8, 0.05), deskMat);
    modPanel.position.set(0, 0.6, -0.9);
    modPanel.castShadow = true;
    deskGroup.add(modPanel);

    // Official Brass Mayor Nameplate
    const nameplateGeo = new THREE.BoxGeometry(0.35, 0.06, 0.08);
    const nameplate = new THREE.Mesh(nameplateGeo, goldAccentMat);
    nameplate.position.set(0, 1.12, -0.75);
    deskGroup.add(nameplate);

    scene.add(deskGroup);
  }

  /**
   * Builds the Official Kota Nusapura Civic Seal & Logo Plaques
   * Placed prominently in 3 places in the room:
   * 1. Grand Wall Plaque above the window arch
   * 2. Gold Medallion on the front of the executive desk modesty panel
   * 3. Civic Emblem on the Municipal Pataka Flag
   */
  function buildOfficialLogoPlaques() {
    const THREE = getThree();
    const textureLoader = new THREE.TextureLoader();

    // Load official Nusapura vector emblem
    const logoTexture = textureLoader.load('images/logo_nusapura.svg', function (texture) {
      if (texture) {
        texture.anisotropy = 4;
        if (THREE.sRGBEncoding) texture.encoding = THREE.sRGBEncoding;
      }
    });

    const goldFrameMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.92,
      roughness: 0.18,
      emissive: 0x996515,
      emissiveIntensity: 0.15
    });

    const logoPlaneMat = new THREE.MeshStandardMaterial({
      map: logoTexture,
      transparent: true,
      roughness: 0.3,
      metalness: 0.15
    });

    // ========================================================
    // 1. GRAND WALL EMBLEM: NUSAPURA CIVIC SHIELD (ABOVE WINDOW)
    // ========================================================
    const grandShieldGroup = new THREE.Group();
    grandShieldGroup.position.set(0, 2.9, -3.88);

    // Beveled Shield / Medallion Backing Board
    const shieldBacking = new THREE.Mesh(
      new THREE.CylinderGeometry(0.48, 0.52, 0.05, 32),
      goldFrameMat
    );
    shieldBacking.rotation.x = Math.PI / 2;
    grandShieldGroup.add(shieldBacking);

    // Inner navy velvet medallion face
    const innerFace = new THREE.Mesh(
      new THREE.CylinderGeometry(0.44, 0.44, 0.055, 32),
      new THREE.MeshStandardMaterial({ color: 0x07192f, roughness: 0.7 })
    );
    innerFace.rotation.x = Math.PI / 2;
    grandShieldGroup.add(innerFace);

    // Logo Plane Display
    const grandLogoPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(0.75, 0.75),
      logoPlaneMat
    );
    grandLogoPlane.position.set(0, 0, 0.035);
    grandShieldGroup.add(grandLogoPlane);

    grandShieldGroup.userData = {
      id: 'city_seal_wall',
      title: 'Lambang Resmi Kota Nusapura',
      title_en: 'Official Seal of Nusapura City',
      hint: 'Motto: "City of Opportunities" • Simbol Integritas & Kemajuan',
      hint_en: 'Motto: "City of Opportunities" • Civic Pride & Integrity',
      action: () => {
        if (typeof AudioManager !== 'undefined') AudioManager.playSfx('sfx_stempel');
      }
    };
    scene.add(grandShieldGroup);
    interactiveObjects.push(shieldBacking);
    shieldBacking.userData = grandShieldGroup.userData;

    // ========================================================
    // 2. DESK FRONT EMBLEM: GOLD CIVIC MEDALLION
    // ========================================================
    const deskPlaqueGroup = new THREE.Group();
    deskPlaqueGroup.position.set(0, 0.6, -0.935);
    deskPlaqueGroup.rotation.y = Math.PI; // Faces front of room!

    const deskMedallionRim = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.26, 0.03, 32),
      goldFrameMat
    );
    deskMedallionRim.rotation.x = Math.PI / 2;
    deskPlaqueGroup.add(deskMedallionRim);

    const deskLogoPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(0.38, 0.38),
      logoPlaneMat
    );
    deskLogoPlane.position.set(0, 0, 0.02);
    deskPlaqueGroup.add(deskLogoPlane);

    deskPlaqueGroup.userData = {
      id: 'city_seal_desk',
      title: 'Plakat Emas Meja Eksekutif Nusapura',
      title_en: 'Executive Desk Civic Medallion',
      hint: 'Lambang Resmi Pemerintahan Kota Nusapura',
      hint_en: 'Official Seal of Nusapura Municipal Government',
      action: () => {
        if (typeof AudioManager !== 'undefined') AudioManager.playSfx('sfx_stempel');
      }
    };
    scene.add(deskPlaqueGroup);
    interactiveObjects.push(deskMedallionRim);
    deskMedallionRim.userData = deskPlaqueGroup.userData;

    // ========================================================
    // 3. PATAKA FLAG EMBLEM: ON MUNICIPAL BANNER
    // ========================================================
    const flagLogoPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(0.48, 0.48),
      logoPlaneMat
    );
    flagLogoPlane.position.set(1.75, 2.5, -2.78);
    scene.add(flagLogoPlane);
  }

  function buildDeskAccessories() {
    const THREE = getThree();
    const lampGroup = new THREE.Group();
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.2 });
    const greenGlassMat = new THREE.MeshStandardMaterial({
      color: 0x059669,
      roughness: 0.1,
      metalness: 0.1,
      emissive: 0x059669,
      emissiveIntensity: 0.35
    });

    const lampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.04, 16), brassMat);
    lampBase.position.set(-0.85, 1.11, -0.4);
    lampGroup.add(lampBase);

    const lampStem = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.28, 8), brassMat);
    lampStem.position.set(-0.85, 1.25, -0.4);
    lampGroup.add(lampStem);

    const shadeGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.24, 16, 1, false, 0, Math.PI);
    const shade = new THREE.Mesh(shadeGeo, greenGlassMat);
    shade.rotation.z = Math.PI / 2;
    shade.position.set(-0.85, 1.4, -0.4);
    lampGroup.add(shade);

    scene.add(lampGroup);

    // Interactive Object 1: Map APBD
    const apbdDossierGroup = new THREE.Group();
    const leatherFolderMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.4 });
    const folder = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.04, 0.42), leatherFolderMat);
    folder.position.set(0.35, 1.12, -0.32);
    folder.rotation.y = -0.15;
    folder.castShadow = true;
    folder.receiveShadow = true;
    apbdDossierGroup.add(folder);

    const emblem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 0.005, 16),
      new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.9 })
    );
    emblem.position.set(0.35, 1.145, -0.32);
    apbdDossierGroup.add(emblem);

    const haloMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.35, wireframe: true });
    const halo1 = new THREE.Mesh(new THREE.RingGeometry(0.18, 0.24, 24), haloMat);
    halo1.rotation.x = -Math.PI / 2;
    halo1.position.set(0.35, 1.15, -0.32);
    halo1.userData = { isPulse: true };
    apbdDossierGroup.add(halo1);

    apbdDossierGroup.userData = {
      id: 'apbd',
      title: 'Dokumen APBD & Ringkasan Anggaran',
      title_en: 'APBD City Budget Dossier',
      hint: 'Ketuk untuk membuka menu APBD Kota',
      hint_en: 'Tap to view APBD City Budget Details',
      action: () => {
        if (typeof AudioManager !== 'undefined') AudioManager.playSfx('sfx_kas');
        closeOffice3dModal();
        const btnBudget = document.getElementById('btnShowBudget');
        if (btnBudget) btnBudget.click();
      }
    };
    scene.add(apbdDossierGroup);
    interactiveObjects.push(folder);
    folder.userData = apbdDossierGroup.userData;

    // Interactive Object 2: Hotline Phone
    const phoneGroup = new THREE.Group();
    const phoneMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.3, metalness: 0.2 });
    const phoneBase = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.08, 0.26), phoneMat);
    phoneBase.position.set(-0.55, 1.14, -0.45);
    phoneBase.rotation.y = 0.2;
    phoneBase.castShadow = true;
    phoneGroup.add(phoneBase);

    const handsetMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.3 });
    const handset = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.28), handsetMat);
    handset.position.set(-0.55, 1.2, -0.45);
    handset.rotation.y = 0.2;
    phoneGroup.add(handset);

    const phoneLed = new THREE.Mesh(new THREE.SphereGeometry(0.015, 8, 8), new THREE.MeshBasicMaterial({ color: 0xef4444 }));
    phoneLed.position.set(-0.5, 1.18, -0.4);
    phoneGroup.add(phoneLed);

    phoneGroup.userData = {
      id: 'phone',
      title: 'Telepon Hotline & Memo Sekretaris',
      title_en: 'Executive Hotline & Secretary Memo',
      hint: 'Ketuk untuk membuka Laporan Ajudan & Memo Rahasia',
      hint_en: 'Tap to open Secretary Intelligence Dossier',
      action: () => {
        if (typeof AudioManager !== 'undefined') AudioManager.playSfx('sfx_mulai');
        closeOffice3dModal();
        if (typeof openSecretaryBriefingModal === 'function') openSecretaryBriefingModal();
      }
    };
    scene.add(phoneGroup);
    interactiveObjects.push(phoneBase);
    phoneBase.userData = phoneGroup.userData;

    // Interactive Object 3: Laptop
    const laptopGroup = new THREE.Group();
    const laptopMetalMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.2 });
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x0284c7 });

    const baseChassis = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.015, 0.24), laptopMetalMat);
    baseChassis.position.set(-0.15, 1.11, -0.22);
    baseChassis.rotation.y = 0.05;
    laptopGroup.add(baseChassis);

    const screenChassis = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.22, 0.01), laptopMetalMat);
    screenChassis.position.set(-0.15, 1.21, -0.34);
    screenChassis.rotation.x = -0.2;
    screenChassis.rotation.y = 0.05;
    laptopGroup.add(screenChassis);

    const screenLcd = new THREE.Mesh(new THREE.PlaneGeometry(0.29, 0.18), screenMat);
    screenLcd.position.set(-0.15, 1.21, -0.33);
    screenLcd.rotation.x = -0.2;
    screenLcd.rotation.y = 0.05;
    laptopGroup.add(screenLcd);

    laptopGroup.userData = {
      id: 'laptop',
      title: 'Portal Karir, LHKPN & Profil Walikota',
      title_en: 'Executive Portal & Personal Life Assets',
      hint: 'Ketuk untuk membuka Portofolio & Kehidupan Pribadi',
      hint_en: 'Tap to view Career, Wealth & Family Status',
      action: () => {
        if (typeof AudioManager !== 'undefined') AudioManager.playSfx('sfx_stempel');
        closeOffice3dModal();
        const btnLife = document.getElementById('btnShowLife');
        if (btnLife) btnLife.click();
      }
    };
    scene.add(laptopGroup);
    interactiveObjects.push(baseChassis);
    baseChassis.userData = laptopGroup.userData;
  }

  function buildOfficeFurnishings() {
    const THREE = getThree();

    // 1. Executive Chair
    const chairGroup = new THREE.Group();
    const leatherChairMat = new THREE.MeshStandardMaterial({ color: 0x1c1917, roughness: 0.5 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9, roughness: 0.1 });

    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.12, 0.65), leatherChairMat);
    seat.position.set(0, 0.7, 0.35);
    seat.castShadow = true;
    chairGroup.add(seat);

    const backrest = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.95, 0.12), leatherChairMat);
    backrest.position.set(0, 1.2, 0.68);
    backrest.rotation.x = 0.08;
    backrest.castShadow = true;
    chairGroup.add(backrest);

    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.45, 12), chromeMat);
    stem.position.set(0, 0.45, 0.35);
    chairGroup.add(stem);
    scene.add(chairGroup);

    // 2. Flags: Merah Putih & Pataka Nusapura
    const flagMatWhite = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.6 });
    const flagMatRed = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.6 });
    const poleMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.2 });

    const pole1 = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 3.2, 12), poleMat);
    pole1.position.set(-2.2, 1.6, -2.8);
    pole1.castShadow = true;
    scene.add(pole1);

    const redStripe = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.35, 0.02), flagMatRed);
    redStripe.position.set(-1.75, 2.7, -2.8);
    scene.add(redStripe);

    const whiteStripe = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.35, 0.02), flagMatWhite);
    whiteStripe.position.set(-1.75, 2.35, -2.8);
    scene.add(whiteStripe);

    const pole2 = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 3.2, 12), poleMat);
    pole2.position.set(2.2, 1.6, -2.8);
    pole2.castShadow = true;
    scene.add(pole2);

    const pataka = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.7, 0.02), new THREE.MeshStandardMaterial({ color: 0x07192f, roughness: 0.5 }));
    pataka.position.set(1.75, 2.5, -2.8);
    scene.add(pataka);

    // 3. Interactive Object 4: Peta Musrenbang (Left Wall)
    const mapBoardGroup = new THREE.Group();
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.5 });
    const mapCanvasMat = new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.4 });

    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.4, 2.2), frameMat);
    frame.position.set(-3.85, 2.1, -0.6);
    mapBoardGroup.add(frame);

    const mapFace = new THREE.Mesh(new THREE.BoxGeometry(0.02, 1.3, 2.05), mapCanvasMat);
    mapFace.position.set(-3.82, 2.1, -0.6);
    mapBoardGroup.add(mapFace);

    mapBoardGroup.userData = {
      id: 'map_board',
      title: 'Peta Wilayah & Musrenbang Usulan Warga',
      title_en: 'District Map & Musrenbang Deliberation',
      hint: 'Ketuk untuk membuka Musrenbang Kecamatan',
      hint_en: 'Tap to view Citizen Proposals & District Forum',
      action: () => {
        if (typeof AudioManager !== 'undefined') AudioManager.playSfx('sfx_stempel');
        closeOffice3dModal();
        if (typeof openMusrenbangDirect === 'function') openMusrenbangDirect();
      }
    };
    scene.add(mapBoardGroup);
    interactiveObjects.push(frame);
    frame.userData = mapBoardGroup.userData;

    // 4. Interactive Object 5: Lemari Arsip & Perda (Right Wall)
    const cabinetGroup = new THREE.Group();
    const bookcase = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 2.6, 2.0),
      new THREE.MeshStandardMaterial({ color: 0x3f1d0b, roughness: 0.6 })
    );
    bookcase.position.set(3.65, 1.3, -0.6);
    bookcase.castShadow = true;
    cabinetGroup.add(bookcase);

    cabinetGroup.userData = {
      id: 'bookcase',
      title: 'Lemari Perda & Evaluasi Kepala Dinas (Kabinet)',
      title_en: 'By-Law Archives & Municipal Cabinet Heads',
      hint: 'Ketuk untuk membuka Kabinet Dinas & Regulasi Perda',
      hint_en: 'Tap to inspect Cabinet Reshuffle & City Regulations',
      action: () => {
        if (typeof AudioManager !== 'undefined') AudioManager.playSfx('sfx_palu');
        closeOffice3dModal();
        if (typeof openCabinetDirect === 'function') openCabinetDirect();
      }
    };
    scene.add(cabinetGroup);
    interactiveObjects.push(bookcase);
    bookcase.userData = cabinetGroup.userData;

    // 5. Visitor Chairs in front of the desk
    [-0.7, 0.7].forEach(x => {
      const vChair = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.8, 0.55), leatherChairMat);
      vChair.position.set(x, 0.45, -1.8);
      vChair.rotation.y = Math.PI; // Facing the mayor's desk
      scene.add(vChair);
    });

    // Potted plant
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.22, 0.6, 16), new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.2 }));
    pot.position.set(-3.2, 0.3, -3.2);
    pot.castShadow = true;
    scene.add(pot);

    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.6 });
    for (let f = 0; f < 5; f++) {
      const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.8, 5), foliageMat);
      leaf.position.set(-3.2 + Math.sin(f * 1.3) * 0.2, 0.8 + f * 0.1, -3.2 + Math.cos(f * 1.3) * 0.2);
      leaf.rotation.x = 0.3 * Math.sin(f);
      leaf.rotation.z = 0.3 * Math.cos(f);
      scene.add(leaf);
    }
  }

  function setupVirtualJoystick() {
    const container = document.getElementById('office3dJoystickContainer');
    const knob = document.getElementById('office3dJoystickKnob');
    if (!container || !knob) return;

    function handleStart(clientX, clientY, id) {
      joystickActive = true;
      joystickTouchId = id;
      const rect = container.getBoundingClientRect();
      joystickCenter = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
      handleMove(clientX, clientY);
    }

    function handleMove(clientX, clientY) {
      if (!joystickActive) return;
      const dx = clientX - joystickCenter.x;
      const dy = clientY - joystickCenter.y;
      const dist = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx);

      const clampedDist = Math.min(dist, joystickMaxRadius);
      const knobX = Math.cos(angle) * clampedDist;
      const knobY = Math.sin(angle) * clampedDist;

      knob.style.transform = `translate(${knobX}px, ${knobY}px)`;

      // Normalized vector (-1 to 1)
      joystickVector.x = knobX / joystickMaxRadius; // Strafe
      joystickVector.y = -knobY / joystickMaxRadius; // Forward (Up is negative Y in DOM)
    }

    function handleEnd() {
      joystickActive = false;
      joystickTouchId = null;
      joystickVector = { x: 0, y: 0 };
      knob.style.transform = 'translate(0px, 0px)';
    }

    // Touch events for mobile
    container.addEventListener('touchstart', e => {
      e.preventDefault();
      const touch = e.changedTouches[0];
      handleStart(touch.clientX, touch.clientY, touch.identifier);
    }, { passive: false });

    window.addEventListener('touchmove', e => {
      if (!joystickActive) return;
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === joystickTouchId) {
          handleMove(e.changedTouches[i].clientX, e.changedTouches[i].clientY);
          break;
        }
      }
    }, { passive: false });

    window.addEventListener('touchend', e => {
      if (!joystickActive) return;
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === joystickTouchId) {
          handleEnd();
          break;
        }
      }
    }, { passive: false });

    // Mouse fallback for joystick
    container.addEventListener('mousedown', e => {
      e.preventDefault();
      handleStart(e.clientX, e.clientY, 'mouse');
      const onMouseMove = (ev) => handleMove(ev.clientX, ev.clientY);
      const onMouseUp = () => {
        handleEnd();
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      };
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    });
  }

  function setupInputEvents() {
    // Canvas pointer controls for looking around & tapping objects
    canvas.addEventListener('pointerdown', onCanvasPointerDown, { passive: false });
    window.addEventListener('pointermove', onCanvasPointerMove, { passive: false });
    window.addEventListener('pointerup', onCanvasPointerUp, { passive: false });
    window.addEventListener('resize', onWindowResize, { passive: true });

    // Keyboard WASD & Arrow Keys
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
  }

  function onKeyDown(e) {
    if (!isOpen) return;
    const k = e.key.toLowerCase();
    if (k === 'w' || e.key === 'ArrowUp') keys.w = true;
    if (k === 's' || e.key === 'ArrowDown') keys.s = true;
    if (k === 'a' || e.key === 'ArrowLeft') keys.a = true;
    if (k === 'd' || e.key === 'ArrowRight') keys.d = true;
  }

  function onKeyUp(e) {
    const k = e.key.toLowerCase();
    if (k === 'w' || e.key === 'ArrowUp') keys.w = false;
    if (k === 's' || e.key === 'ArrowDown') keys.s = false;
    if (k === 'a' || e.key === 'ArrowLeft') keys.a = false;
    if (k === 'd' || e.key === 'ArrowRight') keys.d = false;
  }

  function onCanvasPointerDown(e) {
    if (!isOpen) return;
    // Ignore if touching inside the joystick area
    const joyEl = document.getElementById('office3dJoystickContainer');
    if (joyEl && joyEl.contains(e.target)) return;

    isLookDragging = true;
    lookTouchId = e.pointerId;
    lastLookPos.x = e.clientX;
    lastLookPos.y = e.clientY;
  }

  function onCanvasPointerMove(e) {
    if (!isOpen) return;

    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    checkHover();

    if (isLookDragging && e.pointerId === lookTouchId) {
      const deltaX = e.clientX - lastLookPos.x;
      const deltaY = e.clientY - lastLookPos.y;
      lastLookPos.x = e.clientX;
      lastLookPos.y = e.clientY;

      // Free 360-degree rotation yaw & clamped vertical pitch
      targetRotation.yaw -= deltaX * 0.005;
      targetRotation.pitch = Math.max(-0.85, Math.min(0.75, targetRotation.pitch - deltaY * 0.004));
    }
  }

  function onCanvasPointerUp(e) {
    if (!isLookDragging) return;
    isLookDragging = false;
    lookTouchId = null;

    const dist = Math.hypot(e.clientX - lastLookPos.x, e.clientY - lastLookPos.y);
    if (dist < 10) {
      handleObjectClick();
    }
  }

  function checkHover() {
    if (!raycaster || !camera) return;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactiveObjects, true);

    const banner = document.getElementById('office3dTooltipBanner');
    const titleEl = document.getElementById('office3dTooltipTitle');
    const hintEl = document.getElementById('office3dTooltipHint');

    if (intersects.length > 0) {
      const hit = intersects[0];
      const target = hit.object;
      const data = target.userData;

      // Check distance from player to object (e.g. within 3.5m)
      const objDist = hit.distance;

      if (data && data.title) {
        canvas.style.cursor = 'pointer';
        hoveredObject = data;

        if (banner && titleEl && hintEl) {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          titleEl.textContent = isEn ? (data.title_en || data.title) : data.title;

          if (objDist > 4.2) {
            hintEl.textContent = isEn ? '🚶 Walk closer to inspect or interact' : '🚶 Berjalan mendekat untuk berinteraksi';
          } else {
            hintEl.textContent = isEn ? (data.hint_en || data.hint) : data.hint;
          }
          banner.style.display = 'block';
        }
        return;
      }
    }

    canvas.style.cursor = 'default';
    hoveredObject = null;
    if (banner && !hoveredObject) {
      banner.style.display = 'none';
    }
  }

  function handleObjectClick() {
    if (hoveredObject && typeof hoveredObject.action === 'function') {
      hoveredObject.action();
    }
  }

  function onWindowResize() {
    if (!camera || !renderer || !canvasContainer) return;
    const w = canvasContainer.clientWidth;
    const h = canvasContainer.clientHeight || 1;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  /**
   * Free-roam walking update physics with furniture collision
   */
  function updatePlayerMovement(delta) {
    let moveForward = 0;
    let moveStrafe = 0;

    // 1. Collect inputs (Joystick + Keys)
    if (joystickActive) {
      moveForward += joystickVector.y;
      moveStrafe += joystickVector.x;
    }
    if (keys.w) moveForward += 1;
    if (keys.s) moveForward -= 1;
    if (keys.a) moveStrafe -= 1;
    if (keys.d) moveStrafe += 1;

    const inputMag = Math.hypot(moveForward, moveStrafe);
    if (inputMag > 0.05) {
      isMoving = true;
      isSittingAtDesk = false;
      const normForward = moveForward / (inputMag > 1 ? inputMag : 1);
      const normStrafe = moveStrafe / (inputMag > 1 ? inputMag : 1);

      // Camera horizontal forward and right vectors
      const sinYaw = Math.sin(cameraRotation.yaw);
      const cosYaw = Math.cos(cameraRotation.yaw);

      const forwardX = -sinYaw;
      const forwardZ = -cosYaw;
      const rightX = cosYaw;
      const rightZ = -sinYaw;

      const deltaX = (forwardX * normForward + rightX * normStrafe) * moveSpeed * delta;
      const deltaZ = (forwardZ * normForward + rightZ * normStrafe) * moveSpeed * delta;

      let nextX = playerPos.x + deltaX;
      let nextZ = playerPos.z + deltaZ;

      // Room Wall Boundary Collisions (Room size: 8m x 8.5m)
      nextX = Math.max(-3.4, Math.min(3.4, nextX));
      nextZ = Math.max(-3.4, Math.min(3.6, nextZ));

      // Solid Executive Desk Collision Box
      // Desk is located at X: [-1.35, 1.35], Z: [-1.15, 0.25]
      const inDeskX = nextX > -1.35 && nextX < 1.35;
      const inDeskZ = nextZ > -1.15 && nextZ < 0.25;

      if (inDeskX && inDeskZ) {
        // Prevent walking through the solid desk: slide along boundary
        if (Math.abs(playerPos.x) >= 1.35) {
          nextX = playerPos.x; // Block X penetration
        } else {
          nextZ = playerPos.z; // Block Z penetration
        }
      }

      playerPos.x = nextX;
      playerPos.z = nextZ;

      // Head bobbing animation while walking
      walkCycle += delta * 11;
    } else {
      isMoving = false;
      walkCycle = 0;
    }
  }

  function setTimeOfDay(mode) {
    timeOfDay = mode;
    if (!windowBackgroundMesh || !ambientLight || !sunLight || !deskLampLight) return;

    if (mode === 'day') {
      windowBackgroundMesh.material.color.setHex(0x38bdf8);
      ambientLight.color.setHex(0xfff3e0);
      ambientLight.intensity = 0.65;
      sunLight.color.setHex(0xfffaed);
      sunLight.intensity = 1.25;
      deskLampLight.intensity = 0.8;
      scene.fog.color.setHex(0x1e293b);
    } else if (mode === 'sunset') {
      windowBackgroundMesh.material.color.setHex(0xf97316);
      ambientLight.color.setHex(0xfb923c);
      ambientLight.intensity = 0.5;
      sunLight.color.setHex(0xf43f5e);
      sunLight.intensity = 0.9;
      deskLampLight.intensity = 1.8;
      scene.fog.color.setHex(0x431407);
    } else if (mode === 'night') {
      windowBackgroundMesh.material.color.setHex(0x020617);
      ambientLight.color.setHex(0x1e1b4b);
      ambientLight.intensity = 0.35;
      sunLight.color.setHex(0x38bdf8);
      sunLight.intensity = 0.3;
      deskLampLight.intensity = 2.4;
      scene.fog.color.setHex(0x020617);
    }
  }

  function animate() {
    if (!renderer || !camera || !scene) return;
    animFrameId = requestAnimationFrame(animate);

    const delta = clock ? Math.min(clock.getDelta(), 0.1) : 0.016;
    const time = clock ? clock.getElapsedTime() : 0;

    // Update player walking physics
    updatePlayerMovement(delta);

    // Smooth camera damping for rotation
    cameraRotation.yaw += (targetRotation.yaw - cameraRotation.yaw) * 0.18;
    cameraRotation.pitch += (targetRotation.pitch - cameraRotation.pitch) * 0.18;

    // Head bobbing or idle breathing
    let bobY = 0;
    let bobX = 0;
    if (isMoving) {
      bobY = Math.sin(walkCycle) * 0.038;
      bobX = Math.cos(walkCycle * 0.5) * 0.018;
    } else {
      bobY = Math.sin(time * 1.5) * 0.006;
      bobX = Math.cos(time * 0.8) * 0.004;
    }

    camera.position.set(playerPos.x + bobX, playerPos.y + bobY, playerPos.z);
    camera.rotation.set(cameraRotation.pitch, cameraRotation.yaw, 0);

    // Drifting clouds outside the window
    clouds.forEach(cloud => {
      cloud.position.x += cloud.userData.speed;
      if (cloud.position.x > 9) cloud.position.x = -9;
    });

    // Halos pulse on important interactive desk items
    scene.traverse(obj => {
      if (obj.userData && obj.userData.isPulse) {
        const scale = 1 + Math.sin(time * 3) * 0.08;
        obj.scale.set(scale, scale, scale);
      }
    });

    renderer.render(scene, camera);
  }

  function open() {
    const modal = document.getElementById('office3dModal');
    if (!modal) return;

    if (!isInitialized) {
      init();
    }
    if (!isInitialized) {
      console.warn('Office3D not initialized (WebGL may not be available)');
      return;
    }

    isOpen = true;
    modal.classList.add('show');
    modal.style.display = 'flex';

    onWindowResize();
    syncStatusHeader();

    if (typeof state !== 'undefined') {
      const year = state.year || 1;
      if (year === 1 || year === 2) setTimeOfDay('day');
      else if (year === 3 || year === 4) setTimeOfDay('sunset');
      else setTimeOfDay('night');
    }

    if (!animFrameId) {
      animate();
    }

    if (typeof AudioManager !== 'undefined') {
      AudioManager.playBgm('balaikota');
    }
  }

  function close() {
    const modal = document.getElementById('office3dModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
    isOpen = false;
  }

  /**
   * Resets position back to seated in the mayor's executive chair
   */
  function sitAtDesk() {
    playerPos.x = 0;
    playerPos.y = 1.65;
    playerPos.z = 1.4;
    targetRotation.yaw = 0;
    targetRotation.pitch = -0.1;
    isSittingAtDesk = true;

    if (typeof AudioManager !== 'undefined') {
      AudioManager.playSfx('sfx_stempel');
    }
    if (typeof showToast === 'function') {
      const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
      showToast(isEn ? '🪑 Seated at Mayor\'s Executive Desk' : '🪑 Duduk kembali di Meja Kerja Walikota');
    }
  }

  function syncStatusHeader() {
    if (typeof state === 'undefined') return;
    const nameEl = document.getElementById('office3dMayorName');
    const termEl = document.getElementById('office3dTermYear');
    const apbdEl = document.getElementById('office3dApbd');
    const satEl = document.getElementById('office3dSat');

    const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

    if (nameEl) {
      nameEl.textContent = state.mayorCandidate ? state.mayorCandidate.name : 'Walikota Nusapura';
    }
    if (termEl) {
      termEl.textContent = isEn ? `Term Year ${state.year || 1} (Quarter ${state.quarter || 1})` : `Tahun ke-${state.year || 1} (Triwulan ${state.quarter || 1})`;
    }
    if (apbdEl) {
      apbdEl.textContent = typeof formatIDR === 'function' ? formatIDR(state.apbd || 0) : `Rp ${(state.apbd || 0).toLocaleString()} M`;
    }
    if (satEl) {
      satEl.textContent = `${state.approval || 68}%`;
    }
  }

  return {
    init,
    open,
    close,
    sitAtDesk,
    setTimeOfDay,
    isOpen: () => isOpen
  };
})();

// Global convenience wrappers
function openOffice3dModal() {
  Office3D.open();
}

function closeOffice3dModal() {
  Office3D.close();
}
