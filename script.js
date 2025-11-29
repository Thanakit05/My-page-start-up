// --- DATA ---
const products = [
    // --- Jersey (เสื้อผ้า) ---
    { id: 1, name: 'เสื้อ MUANGTHONG UNITED', price: 757, image: 'https://www.supersports.co.th/cdn/shop/files/MU348AP142ECTH-0.jpg?v=1734402185&width=900', category: 'jersey', description: 'MUANGTHONG UNITED เสื้อแข่งผู้ชายทีมเมืองทอง ยูไนเต็ด ชุดเหย้า ฤดูกาล 2024/25', sizes: ['S', 'M', 'L', 'XL'] },
    { id: 2, name: 'เสื้อ UMBRO', price: 1450, image: 'https://www.supersports.co.th/cdn/shop/files/UM126AP304DZTH-0.jpg?v=1734440406&width=900', category: 'jersey', description: 'UMBRO เสื้อแข่งผู้ชายทีมอิปสวิช ทาวน์ ชุดเหย้า ฤดูกาล 2024/25', sizes: ['S', 'M', 'L', 'XL'] },
    { id: 3, name: 'ชุดแข่งขัน ADIDAS', price: 2900, image: 'https://www.supersports.co.th/cdn/shop/files/AD001AP494EKTH-0.jpg?v=1748513311&width=900', category: 'jersey', description: 'ADIDAS เสื้อแข่งผู้ชายทีมนิวคาสเซิลยูไนเต็ด ชุดเหย้า ฤดูกาล 2025/26', sizes: ['S', 'M', 'L', 'XL'] },
    { id: 4, name: 'เสื้อผู้รักษาประตู ADIDAS', price: 2900, image: 'https://www.supersports.co.th/cdn/shop/files/AD001AP084EOTH-0.jpg?v=1753865255&width=900', category: 'jersey', description: 'ADIDAS เสื้อแข่งผู้ชายทีมนิวคาสเซิลยูไนเต็ด ชุดเยือน ฤดูกาล 2025/26', sizes: ['S', 'M', 'L', 'XL'] },
    { id: 5, name: 'เสื้อฝึกซ้อม ADIDAS', price: 4800, image: 'https://www.supersports.co.th/cdn/shop/files/AD001AP500ELTH-0.jpg?v=1749525579&width=900', category: 'jersey', description: 'ADIDAS เสื้อแข่งผู้ชายแขนยาวทีมเรอัลมาดริด ชุดเหย้า เกรด Authentic ฤดูกาล 2025/26', sizes: ['S', 'M', 'L', 'XL', '2XL'] },
    { id: 6, name: 'เสื้อทีม PRACHUAP FC', price: 1390, image: 'https://www.supersports.co.th/cdn/shop/files/PR718AP667EOTH-0.jpg?v=1755050523&width=900', category: 'jersey', description: 'PRACHUAP FC ชุดแข่งผู้ชายทีมพีที ประจวบ ชุดเยือน ฤดูกาล 2025/26', sizes: ['S', 'M', 'L', 'XL'] },
    { id: 7, name: 'เสื้อแขนสั้น LIVERPOOL FOOTBALL CLUB', price: 2070, image: 'https://www.supersports.co.th/cdn/shop/files/LF068AP711DDTH-0.jpg?v=1734399304&width=900', category: 'jersey', description: 'LFC เสื้อแข่งผู้ชาย Retro ชุดเหย้า ฤดูกาล 2000', sizes: ['S', 'M', 'L', 'XL'] },
    { id: 8, name: 'กางเกง ADIDAS', price: 1700, image: 'https://www.supersports.co.th/cdn/shop/files/AD001AP524EKTH-0.jpg?v=1747192818&width=900', category: 'jersey', description: 'ADIDAS กางเกงฟุตบอลผู้ชายทีมยูเวนตุส ชุดเหย้า ฤดูกาล 2025/26', sizes: ['S', 'M', 'L', 'XL'] },

    // --- Shoes (รองเท้า) ---
    { id: 9, name: 'รองเท้าฟุตบอล NIKE', price: 3500, image: 'https://www.supersports.co.th/cdn/shop/files/NI083SH440ESTH-0.jpg?v=1762397955&width=900', category: 'shoes', description: 'NIKE United Phantom 6 Low Elite FG รองเท้าฟุตบอลผู้ชาย', sizes: ['38', '39', '40', '41', '42', '43'] },
    { id: 10, name: 'รองเท้าฟุตบอล PUMA', price: 2030, image: 'https://www.supersports.co.th/cdn/shop/files/PU097SH846ENTH-0.jpg?v=1753095348&width=900', category: 'shoes', description: 'PUMA Future 8 Match FG/AG รองเท้าฟุตบอลเด็กผู้ชาย', sizes: ['38', '39', '40', '41', '42', '43'] },
    { id: 11, name: 'รองเท้าฟุตบอล NIKE', price: 6660, image: 'https://www.supersports.co.th/cdn/shop/files/NI083SH930EJTH-1.jpg?v=1744772820&width=900', category: 'shoes', description: 'NIKE Mercurial Superfly 10 Elite Kylian Mbappé FG รองเท้าฟุตบอลผู้ชาย', sizes: ['38', '39', '40', '41', '42', '43'] },
    { id: 12, name: 'รองเท้าฟุตบอล PUMA', price: 1870, image: 'https://www.supersports.co.th/cdn/shop/files/PU097SH640ERTH-2.jpg?v=1763513486&width=900', category: 'shoes', description: 'PUMA Future 8 Play FG/AG รองเท้าฟุตบอลผู้ชาย', sizes: ['38', '39', '40', '41', '42', '43', '44'] },
    { id: 13, name: 'รองเท้าฟุตบอล UMBRO', price: 870, image: 'https://www.supersports.co.th/cdn/shop/files/UM126SH293EOTH-0.jpg?v=1754291690&width=900', category: 'shoes', description: 'UMBRO Formation III FG รองเท้าฟุตบอลเด็ก', sizes: ['38', '39', '40', '41', '42', '43'] },
    { id: 14, name: 'รองเท้าฟุตบอล PUMA', price: 1540, image: 'https://www.supersports.co.th/cdn/shop/files/PU097SH845ENTH-2.jpg?v=1763512429&width=900', category: 'shoes', description: 'PUMA Future 8 Play FG/AG Eclipse รองเท้าฟุตบอลผู้ชาย', sizes: ['36', '37', '38', '39', '40', '41', '42', '43'] },
    { id: 15, name: 'รองเท้าฟุตบอล ADIDAS', price: 8100, image: 'https://www.supersports.co.th/cdn/shop/files/AD001SH750EMTH-3.jpg?v=1763506700&width=900', category: 'shoes', description: 'ADIDAS Copa Pure 3 Elite FG รองเท้าฟุตบอลผู้ชาย', sizes: ['38', '39', '40', '41', '42', '43'] },
    { id: 16, name: 'รองเท้าฟุตบอล NIKE', price: 5220, image: 'https://www.supersports.co.th/cdn/shop/files/NI083SH916EJTH-1.jpg?v=1743765785&width=900', category: 'shoes', description: 'NIKE Mercurial Vapor 16 Elite FG Low-Top รองเท้าฟุตบอลผู้ชาย', sizes: ['30', '31', '32', '33', '34', '35', '36', '37'] },

    // --- Ball (ลูกบอล) ---
    { id: 17, name: 'ลูกฟุตบอล PUMA', price: 468, image: 'https://www.supersports.co.th/cdn/shop/files/PU097AC636ELTH-0.jpg?v=1749117988&width=900', category: 'ball', description: 'PUMA Orbita Premier League Brilliance Mini ลูกฟุตบอล', sizes: ['Size 5'] },
    { id: 18, name: 'ลูกฟุตบอล MAZSA', price: 295, image: 'https://www.supersports.co.th/cdn/shop/files/MA158AC238DCTH-0.jpg?v=1734399724&width=900', category: 'ball', description: 'MAZSA MBS22059050 ลูกฟุตบอล', sizes: ['Size 1'] },
    { id: 19, name: 'ลูกฟุตซอล UMBRO', price: 590, image: 'https://www.supersports.co.th/cdn/shop/files/UM126AC121DMTH-0.jpg?v=1734440105&width=900', category: 'ball', description: 'UMBRO Sala Cup ลูกฟุตซอล', sizes: ['Futsal Size'] },
    { id: 20, name: 'ลูกฟุตบอล LIVERPOOL FOOTBALL CLUB', price: 990, image: 'https://www.supersports.co.th/cdn/shop/files/LF068AC960EDTH-0.jpg?v=1734398766&width=900', category: 'ball', description: 'LFC Neon ลูกฟุตบอล', sizes: ['Size 3'] },
    { id: 21, name: 'ลูกฟุตบอล ADIDAS', price: 1200, image: 'https://www.supersports.co.th/cdn/shop/files/AD001SH810EMTH-0.jpg?v=1751527483&width=900', category: 'ball', description: 'ADIDAS UCL Training 25/26 League Stage Foil ลูกฟุตบอล', sizes: ['Size 5'] },
    { id: 22, name: 'ลูกฟุตบอล FUTBOLX', price: 273, image: 'https://www.supersports.co.th/cdn/shop/files/FU635SP525EBTH-0.jpg?v=1734395106&width=900', category: 'ball', description: 'FUTBOLX Suriken Ex ลูกฟุตบอล', sizes: ['Size 5'] },
    { id: 23, name: 'ลูกฟุตบอล PUMA', price: 578

, image: 'https://www.supersports.co.th/cdn/shop/files/PU097SP766EJTH-0.jpg?v=1743754680&width=900', category: 'ball', description: 'PUMA Cup Graphic ลูกฟุตบอล', sizes: ['Size 5'] },
    { id: 24, name: 'ลูกฟุตบอล ADIDAS', price: 900, image: 'https://www.supersports.co.th/cdn/shop/files/AD001AC515ELTH-0.jpg?v=1750648533&width=900', category: 'ball', description: 'ADIDAS Manchester United Home Club ลูกฟุตบอล', sizes: ['Size 5'] },

    // --- Equipment (อุปกรณ์) ---
    { id: 25, name: 'ถุงมือผู้รักษาประตู FUTBOLX', price: 672, image: 'https://www.supersports.co.th/cdn/shop/files/FU635AC668EITH-0.jpg?v=1746523806&width=900', category: 'equipment', description: 'FUTBOLX Shot-Stopper ถุงมือผู้รักษาประตู', sizes: ['S', 'M', 'L', 'XL'] },
    { id: 26, name: 'สนับแข้งฟุตบอลผู้ชาย NIKE', price: 450, image: 'https://www.supersports.co.th/cdn/shop/files/NI083AC058EDTH-0.jpg?v=1760589386&width=900', category: 'equipment', description: 'NIKE Mercurial Lite สนับแข้งฟุตบอลผู้ชาย', sizes: ['One Size'] },
    { id: 27, name: 'กระเป๋ายิม NIKE', price: 1200, image: 'https://www.supersports.co.th/cdn/shop/files/NI083AC640DDTH-0.jpg?v=1734404226&width=900', category: 'equipment', description: 'NIKE Gym Club กระเป๋ายิมทรงหมอนผู้ใหญ่', sizes: ['S', 'M', 'L', 'XL'] },
    { id: 28, name: 'กระบอกน้ำ LIVERPOOL FOOTBALL CLUB', price: 630, image: 'https://www.supersports.co.th/cdn/shop/files/LF068AC960EQTH-0.jpg?v=1759832568&width=900', category: 'equipment', description: 'LFC 25/26 Home กระบอกน้ำ', sizes: ['S', 'M', 'L', 'XL'] },
    { id: 29, name: 'ผ้าพันคอ LIVERPOOL FOOTBALL CLUB', price: 1290, image: 'https://www.supersports.co.th/cdn/shop/files/LF068AC660ENTH-0.jpg?v=1753158114&width=900', category: 'equipment', description: 'LFC EPL Champions 2024/25 ผ้าพันคอผู้ใหญ่', sizes: ['One Size'] },
    { id: 30, name: 'ถุงมือผู้รักษาประตู ADIDAS', price: 700, image: 'https://www.supersports.co.th/cdn/shop/files/AD001AC668EDTH-0.jpg?v=1734370444&width=900', category: 'equipment', description: 'ADIDAS Predator Match Fingersave ถุงมือผู้รักษาประตูเด็ก', sizes: ['750ml'] },
    { id: 31, name: 'สนับแข้งฟุตบอล UMBRO', price: 190, image: 'https://www.supersports.co.th/cdn/shop/files/UM126AC372ECTH-0.jpg?v=1734440166&width=900', category: 'equipment', description: 'UMBRO NC สนับแข้งฟุตบอลผู้ชาย', sizes: ['One Size'] },
    { id: 32, name: 'ถุงเท้าฟุตบอล ADIDAS', price: 275, image: 'https://www.supersports.co.th/cdn/shop/files/AD001AC126DQTH-0.jpg?v=1734369245&width=900', category: 'equipment', description: 'ADIDAS Adi 24 ถุงเท้าฟุตบอลผู้ชาย', sizes: ['One Size'] },
];

// Team members data
const teamMembers = [
    {
        id: 1,
        name: "Thanakit Ploymalee",
        position: "CEO & Founder",
        image: "https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.15752-9/582541968_1561586878208526_4135010544791756128_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=fteSaqWFmS4Q7kNvwGKYehA&_nc_oc=Adl8wCjiWpsQZnFmFQ4Wo2ezoMqR2EpRRdjTPtYONLHQkzOQvxAjJuT_-2ee0LniVmS1aU9mH5SYGd-gquJXQRpA&_nc_zt=23&_nc_ht=scontent.fbkk13-2.fna&oh=03_Q7cD3wEORXvGLlCa3-hfqCKxwuo1e3IgIqB4HkGchfJnCc0TCA&oe=69490F34",
        github: "https://github.com/Thanakit05",
        facebook: "https://www.facebook.com/bimxilektrxn",
        instagram: "https://www.instagram.com/beam_.electron._t/?theme=dark"
    },
    {
        id: 2,
        name: "Ratchata pramuan",
        position: "CTO",
        image: "https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.15752-9/582649677_1386532173123077_3193224198724031295_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_ohc=9DbRGUP1SZ0Q7kNvwHmAffz&_nc_oc=AdnzQlrkQd-Ki2f3_hasUTBFcIrdfw5bpLJTB4AR-PTg85x4hBmNKg0ZiJgA2h7V4pGoWI2MZaFjuVsk0eIfDh-r&_nc_zt=23&_nc_ht=scontent.fbkk13-1.fna&oh=03_Q7cD3wHB6fx-AXAFCtbZ56n_PAaQJN8oLZ86h7NAstdBeXqp4g&oe=69490BB0",
        github: "https://github.com/nine5566",
        facebook: "https://www.facebook.com/sani.nine",
        instagram: "https://www.instagram.com/ratpra87/?theme=dark"
    },
    {
        id: 3,
        name: "Patiphat Chunoon",
        position: "Developer",
        image: "https://scontent.fbkk7-3.fna.fbcdn.net/v/t39.30808-6/455818097_2149458278759264_860512778836729733_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGKoHQ8Z2CtiXelmg2o9UlcqVFxhDE5kL-pUXGEMTmQvy7vGd-PXKVpy4KjLMkcooSpAZqdTjba9_c0Wlyu513d&_nc_ohc=sSsWCpETHkoQ7kNvwFLPXT2&_nc_oc=Adnzn003ScpRX3iMCtOkVeO7ErnpHc7DOlj7J5VHQeDnJ1LFOe7UHaLEZofBDP3AspA&_nc_zt=23&_nc_ht=scontent.fbkk7-3.fna&_nc_gid=hgJb-fjH7vH2brkZeaJNog&oh=00_Afhbrp83ryZ4EtN_2n5WqAUAvGkiOzyy4WfXHpw5PnUwxQ&oe=69277722",
        github: "https://github.com/PATIPHATCHUNOON",
        facebook: "https://www.facebook.com/Beam007x",
        instagram: "https://www.instagram.com/_patiphat_11/"
    },
    {
        id: 4,
        name: "Piyawat Supawimon",
        position: "UX/UI Designer",
        image: "https://img5.pic.in.th/file/secure-sv1/IMG_1496e6f9ddbe5b14f916.jpg",
        github: "https://github.com/piyawat67",
        facebook: "https://www.facebook.com/piyawat.supawimon.1/",
        instagram: "https://www.instagram.com/manuminnn/?theme=dark"
    }
];

let cart = [];
let currentProductDetail = null;
let filteredProductsList = [...products];
let currentUser = null;
let users = JSON.parse(localStorage.getItem('edushop-users')) || [];
let orders = JSON.parse(localStorage.getItem('edushop-orders')) || [];

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    checkLoginStatus();
    renderFeaturedProducts();
    renderShopProducts(products);
    updateCartUI();
    setupFormListeners();
    renderTeamMembers();
    setupAuthListeners();
});

// --- AUTHENTICATION ---
function checkLoginStatus() {
    const savedUser = localStorage.getItem('edushop-currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserUI();
    }
}

function updateUserUI() {
    const userMenu = document.getElementById('userMenu');
    const loggedInUserMenu = document.getElementById('loggedInUserMenu');
    const loggedInUserName = document.getElementById('loggedInUserName');
    
    if (currentUser) {
        userMenu.classList.add('d-none');
        loggedInUserMenu.classList.remove('d-none');
        loggedInUserName.textContent = currentUser.name.split(' ')[0]; // Show first name only
    } else {
        userMenu.classList.remove('d-none');
        loggedInUserMenu.classList.add('d-none');
    }
}

function showLoginModal() {
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    loginModal.show();
}

function showRegisterModal() {
    const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));
    registerModal.show();
}

function switchToRegister() {
    bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
    showRegisterModal();
}

function switchToLogin() {
    bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
    showLoginModal();
}

function login(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = user;
        localStorage.setItem('edushop-currentUser', JSON.stringify(user));
        updateUserUI();
        bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
        alert(`ยินดีต้อนรับคุณ ${user.name}!`);
        return true;
    } else {
        alert('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
        return false;
    }
}

function register(name, email, password) {
    // Check if user already exists
    if (users.find(u => u.email === email)) {
        alert('อีเมลนี้มีผู้ใช้งานแล้ว');
        return false;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,
        phone: '',
        address: '',
        registerDate: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('edushop-users', JSON.stringify(users));
    
    // Auto login after registration
    currentUser = newUser;
    localStorage.setItem('edushop-currentUser', JSON.stringify(newUser));
    updateUserUI();
    
    bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
    alert(`สมัครสมาชิกสำเร็จ! ยินดีต้อนรับคุณ ${name}`);
    return true;
}

function logout() {
    // 1. ทำงานเกี่ยวกับการออกจากระบบ
    currentUser = null;
    localStorage.removeItem('edushop-currentUser');
    updateUserUI();
    
    // --- แทนที่ alert() และเปลี่ยนลำดับการทำงาน ---
    const message = 'คุณออกจากระบบเรียบร้อยแล้ว';
    
    // 2. กำหนดข้อความใน Modal
    // ต้องแน่ใจว่าคุณได้เพิ่ม HTML Modal ที่มี ID 'modalMessage' และ 'successModal' แล้ว
    document.getElementById('modalMessage').innerText = message; 

    // 3. เรียกใช้ Modal ขึ้นมาแสดง
    const myModal = new bootstrap.Modal(document.getElementById('successModal'));
    myModal.show();
    
    // 4. หน่วงเวลา 1 วินาที (1000ms) เพื่อให้ผู้ใช้เห็น Modal ก่อน
    setTimeout(() => {
        // 5. ค่อยเปลี่ยนหน้าไปยังหน้าหลัก
        showPage('home-page'); 
    }, 1000); 
    // ----------------------------------------------------
}

function setupAuthListeners() {
    // Login form
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        login(email, password);
    });
    
    // Register form
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('รหัสผ่านไม่ตรงกัน');
            return;
        }
        
        if (password.length < 6) {
            alert('รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร');
            return;
        }
        
        register(name, email, password);
    });
}

// --- EDIT PROFILE ---
function showEditProfilePage() {
    if (!currentUser) {
        showLoginModal();
        return;
    }
    
    // Pre-fill form with current user data
    document.getElementById('editName').value = currentUser.name;
    document.getElementById('editEmail').value = currentUser.email;
    document.getElementById('editPhone').value = currentUser.phone || '';
    document.getElementById('editAddress').value = currentUser.address || '';
    
    // Clear password fields
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmNewPassword').value = '';
    
    showPage('edit-profile-page');
}

function updateProfile() {
    if (!currentUser) return;
    
    const name = document.getElementById('editName').value;
    const email = document.getElementById('editEmail').value;
    const phone = document.getElementById('editPhone').value;
    const address = document.getElementById('editAddress').value;
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;
    
    // Check if email is already used by another user
    const emailExists = users.find(u => u.email === email && u.id !== currentUser.id);
    if (emailExists) {
        alert('อีเมลนี้มีผู้ใช้งานแล้ว');
        return;
    }
    
    // Check password change
    if (newPassword) {
        if (newPassword.length < 6) {
            alert('รหัสผ่านใหม่ต้องมีอย่างน้อย 6 ตัวอักษร');
            return;
        }
        
        if (newPassword !== confirmNewPassword) {
            alert('รหัสผ่านใหม่ไม่ตรงกัน');
            return;
        }
        
        if (currentPassword !== currentUser.password) {
            alert('รหัสผ่านปัจจุบันไม่ถูกต้อง');
            return;
        }
        
        currentUser.password = newPassword;
    }
    
    // Update user data
    currentUser.name = name;
    currentUser.email = email;
    currentUser.phone = phone;
    currentUser.address = address;
    
    // Update in users array
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
        users[userIndex] = currentUser;
    }
    
    // Save to localStorage
    localStorage.setItem('edushop-users', JSON.stringify(users));
    localStorage.setItem('edushop-currentUser', JSON.stringify(currentUser));
    
    alert('อัปเดตโปรไฟล์เรียบร้อยแล้ว');
    showPage('profile-page');
}

// --- PROFILE PAGE ---
function showProfilePage() {
    if (!currentUser) {
        showLoginModal();
        return;
    }
    
    // Update profile information
    document.getElementById('profileName').textContent = currentUser.name;
    document.getElementById('profileEmail').textContent = currentUser.email;
    document.getElementById('profileFullName').textContent = currentUser.name;
    document.getElementById('profileEmailFull').textContent = currentUser.email;
    document.getElementById('profilePhone').textContent = currentUser.phone || 'ยังไม่ระบุ';
    document.getElementById('profileAddress').textContent = currentUser.address || 'ยังไม่ระบุ';
    
    const registerDate = new Date(currentUser.registerDate);
    document.getElementById('profileRegisterDate').textContent = registerDate.toLocaleDateString('th-TH');
    
    showPage('profile-page');
}

// --- ORDERS PAGE ---
function showOrdersPage() {
    if (!currentUser) {
        showLoginModal();
        return;
    }
    
    const userOrders = orders.filter(order => order.userId === currentUser.id);
    const container = document.getElementById('orders-container');
    
    if (userOrders.length === 0) {
        container.innerHTML = '<div class="alert alert-info">คุณยังไม่มีคำสั่งซื้อ</div>';
    } else {
        container.innerHTML = userOrders.map(order => createOrderCard(order)).join('');
    }
    
    showPage('orders-page');
}

function createOrderCard(order) {
    const orderDate = new Date(order.date);
    const statusClass = `status-${order.status}`;
    
    return `
        <div class="card order-card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-8">
                        <h5 class="card-title">คำสั่งซื้อ #${order.id}</h5>
                        <p class="card-text">
                            <strong>วันที่:</strong> ${orderDate.toLocaleDateString('th-TH')}<br>
                            <strong>จำนวนสินค้า:</strong> ${order.items.length} รายการ<br>
                            <strong>ยอดรวม:</strong> ฿${order.total.toLocaleString()}
                        </p>
                    </div>
                    <div class="col-md-4 text-end">
                        <span class="order-status ${statusClass}">${getStatusLabel(order.status)}</span><br>
                        <button class="btn btn-sm btn-outline-primary mt-2" onclick="viewOrderDetails(${order.id})">
                            ดูรายละเอียด
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getStatusLabel(status) {
    const labels = {
        'pending': 'รอการชำระเงิน',
        'processing': 'กำลังดำเนินการ',
        'shipped': 'จัดส่งแล้ว',
        'delivered': 'จัดส่งสำเร็จ',
        'cancelled': 'ยกเลิก'
    };
    return labels[status] || status;
}

function viewOrderDetails(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;

    // แปลงข้อมูลสินค้าเป็นข้อความล้วน 
    let itemsText = order.items.map(item =>
        `- ${item.name} (${item.size}) | ราคา: ฿${item.price.toLocaleString()} | จำนวน: ${item.quantity} | รวม: ฿${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');

    // แสดงใน alert แบบแสดงครบทุกชิ้น
    alert(
        `คำสั่งซื้อ #${order.id}\n\n` +
        `สินค้า:\n${itemsText}\n\n` +
        `ยอดรวมทั้งหมด: ฿${order.total.toLocaleString()}\n` +
        `สถานะ: ${getStatusLabel(order.status)}`
    );
}

// --- PAGE NAVIGATION ---
function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
    
    if (pageId === 'shop-page') {
        renderShopProducts(filteredProductsList);
    } else if (pageId === 'profile-page') {
        showProfilePage();
    } else if (pageId === 'edit-profile-page') {
        showEditProfilePage();
    } else if (pageId === 'orders-page') {
        showOrdersPage();
    }
}

// --- PRODUCT RENDERING ---
function renderFeaturedProducts() {
    const container = document.getElementById('featured-products');
    const featured = products.slice(0, 4);
    container.innerHTML = featured.map(p => createProductCard(p)).join('');
}

function renderShopProducts(productsToRender) {
    const container = document.getElementById('shop-products');
    if (productsToRender.length === 0) {
        container.innerHTML = '<p class="col-12">ไม่พบสินค้าที่ตรงกับเงื่อนไข</p>';
        return;
    }
    container.innerHTML = productsToRender.map(p => createProductCard(p)).join('');
}

function createProductCard(product) {
    return `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="product-card-body">
                    <h5 class="product-card-title">${product.name}</h5>
                    <p class="product-price">฿${product.price.toLocaleString()}</p>
                    <button class="btn btn-primary w-100" onclick="viewProductDetail(${product.id})">ดูรายละเอียด</button>
                </div>
            </div>
        </div>
    `;
}

// --- TEAM MEMBERS ---
function renderTeamMembers() {
    const container = document.getElementById('team-members');
    container.innerHTML = teamMembers.map(member => createTeamMemberCard(member)).join('');
}

function createTeamMemberCard(member) {
    return `
        <div class="col-lg-3 col-md-6">
            <div class="team-member-card">
                <img src="${member.image}" alt="${member.name}" class="team-member-img">
                <div class="team-member-info">
                    <h3 class="team-member-name">${member.name}</h3>
                    <p class="team-member-position">${member.position}</p>
                    <div class="team-member-social">
                        <a href="${member.github}" target="_blank" class="github" title="GitHub">
                            <i class="bi bi-github"></i>
                        </a>
                        <a href="${member.facebook}" target="_blank" class="facebook" title="Facebook">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="${member.instagram}" target="_blank" class="instagram" title="Instagram">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// --- PRODUCT DETAIL ---
function viewProductDetail(productId) {
    currentProductDetail = products.find(p => p.id === productId);
    if (!currentProductDetail) return;

    document.getElementById('detail-image').src = currentProductDetail.image;
    document.getElementById('detail-name').textContent = currentProductDetail.name;
    document.getElementById('detail-price').textContent = `฿${currentProductDetail.price.toLocaleString()}`;
    document.getElementById('detail-description').textContent = currentProductDetail.description;

    const sizesContainer = document.getElementById('detail-sizes');
    sizesContainer.innerHTML = currentProductDetail.sizes.map(s => `
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="size" id="size-${s}" value="${s}" ${s === currentProductDetail.sizes[0] ? 'checked' : ''}>
            <label class="form-check-label" for="size-${s}">${s}</label>
        </div>
    `).join('');

    showPage('product-detail-page');
}

function addToCartFromDetail() {
    if (!currentProductDetail) return;
    const quantity = parseInt(document.getElementById('detail-quantity').value);
    const selectedSize = document.querySelector('input[name="size"]:checked').value;
    addToCart(currentProductDetail.id, quantity, selectedSize);
}

// --- CART FUNCTIONALITY ---
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('edushop-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function saveCartToStorage() {
    localStorage.setItem('edushop-cart', JSON.stringify(cart));
}

function addToCart(productId, quantity, size) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId && item.size === size);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity, size });
    }

    saveCartToStorage();
    updateCartUI();
    
    // --- แก้ไข/แทนที่ส่วนนี้ ---
    const message = `เพิ่ม "${product.name}" ไซส์ ${size} จำนวน ${quantity} ชิ้น ลงในตะกร้าแล้ว!`;
    
    // 1. นำข้อความไปใส่ใน Modal
    document.getElementById('modalMessage').innerText = message; 

    // 2. เรียกใช้ Modal ขึ้นมาแสดง
    const myModal = new bootstrap.Modal(document.getElementById('successModal'));
    myModal.show();
    // ----------------------------
}

function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    saveCartToStorage();
    updateCartUI();
}

function updateCartUI() {
    const cartCountEl = document.getElementById('cart-count');
    const cartItemsEl = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    const cartEmptyMsg = document.getElementById('cart-empty-message');
    const cartContent = document.getElementById('cart-content');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = totalItems;

    if (cart.length === 0) {
        cartEmptyMsg.style.display = 'block';
        cartContent.style.display = 'none';
        return;
    }

    cartEmptyMsg.style.display = 'none';
    cartContent.style.display = 'block';

    cartItemsEl.innerHTML = cart.map(item => `
        <tr>
            <td>
                <img src="${item.image}" alt="${item.name}" class="me-2">
                ${item.name} <br><small class="text-muted">ไซส์: ${item.size}</small>
            </td>
            <td>฿${item.price.toLocaleString()}</td>
            <td>
                <input type="number" class="form-control form-control-sm quantity-selector" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, '${item.size}', this.value)">
            </td>
            <td>฿${(item.price * item.quantity).toLocaleString()}</td>
            <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id}, '${item.size}')"><i class="bi bi-trash"></i></button></td>
        </tr>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalEl.textContent = total.toLocaleString();
}

function updateQuantity(productId, size, newQuantity) {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (item) {
        item.quantity = parseInt(newQuantity);
        saveCartToStorage();
        updateCartUI();
    }
}

function clearCart() {
    if (confirm('คุณแน่ใจหรือไม่ที่จะล้างตะกร้าสินค้าทั้งหมด?')) {
        cart = [];
        saveCartToStorage();
        updateCartUI();
    }
}

function proceedToCheckout() {
    if (!currentUser) {
        alert('กรุณาเข้าสู่ระบบก่อนทำการสั่งซื้อ');
        showLoginModal();
        return;
    }
    
    // Pre-fill checkout form with user data
    if (currentUser) {
        document.getElementById('fullName').value = currentUser.name;
        document.getElementById('email').value = currentUser.email;
        document.getElementById('phone').value = currentUser.phone || '';
        // Address would need to be stored in user profile
    }
    
    showPage('checkout-page');
}

// --- SHOP PAGE FILTERING & SORTING ---
function applyFilters() {
    const checkedCategories = Array.from(document.querySelectorAll('.form-check-input[type="checkbox"]:checked')).map(cb => cb.value);
    const selectedPriceRange = document.querySelector('input[name="price"]:checked');

    filteredProductsList = products.filter(p => {
        const categoryMatch = checkedCategories.length === 0 || checkedCategories.includes(p.category);
        let priceMatch = true;
        if (selectedPriceRange) {
            const range = selectedPriceRange.value;
            if (range === '0-500') priceMatch = p.price < 500;
            else if (range === '500-2000') priceMatch = p.price >= 500 && p.price <= 2000;
            else if (range === '2000-') priceMatch = p.price > 2000;
        }
        return categoryMatch && priceMatch;
    });
    renderShopProducts(filteredProductsList);
}

function clearFilters() {
    document.querySelectorAll('.form-check-input').forEach(input => input.checked = false);
    filteredProductsList = [...products];
    renderShopProducts(filteredProductsList);
}

function sortProducts(sortBy) {
    let sorted = [...filteredProductsList];
    switch (sortBy) {
        case 'name-asc': sorted.sort((a, b) => a.name.localeCompare(b.name)); break;
        case 'name-desc': sorted.sort((a, b) => b.name.localeCompare(a.name)); break;
        case 'price-asc': sorted.sort((a, b) => a.price - b.price); break;
        case 'price-desc': sorted.sort((a, b) => b.price - a.price); break;
        default: sorted = [...filteredProductsList]; break;
    }
    renderShopProducts(sorted);
}

function filterByCategory(category) {
    document.querySelectorAll('.form-check-input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.getElementById(`cat-${category}`).checked = true;
    applyFilters();
    showPage('shop-page');
}

// --- SEARCH ---
function searchProducts(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (!searchTerm) {
        filteredProductsList = [...products];
    } else {
        filteredProductsList = products.filter(p => p.name.toLowerCase().includes(searchTerm));
    }
    renderShopProducts(filteredProductsList);
    showPage('shop-page');
}

// --- CHECKOUT ---
function setupFormListeners() {
    // Edit Profile form
    document.getElementById('editProfileForm').addEventListener('submit', (e) => {
        e.preventDefault();
        updateProfile();
    });
    
    // Checkout form
    document.getElementById('checkout-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!currentUser) {
            alert('กรุณาเข้าสู่ระบบก่อนทำการสั่งซื้อ');
            showLoginModal();
            return;
        }
        
        // Create order
        const order = {
            id: Date.now(),
            userId: currentUser.id,
            items: [...cart],
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            date: new Date().toISOString(),
            status: 'pending',
            shippingAddress: {
                fullName: document.getElementById('fullName').value,
                address: document.getElementById('address').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value
            },
            paymentMethod: document.querySelector('input[name="payment"]:checked').value
        };
        
      orders.push(order);
   localStorage.setItem('edushop-orders', JSON.stringify(orders));
        
    // --- แทนที่ alert() ด้วยโค้ด Modal ด้านล่างนี้ ---
    const message = 'ขอบคุณสำหรับการสั่งซื้อ! เราได้รับคำสั่งซื้อของคุณแล้ว';
    
    // 1. กำหนดข้อความใน Modal
    document.getElementById('modalMessage').innerText = message; 

    // 2. เรียกใช้ Modal 
    const myModal = new bootstrap.Modal(document.getElementById('successModal'));
    myModal.show();
    // ----------------------------------------------------

   cart = [];
   saveCartToStorage();
   updateCartUI();
   // showPage('orders-page'); // แนะนำให้เรียก showPage หลัง Modal ถูกปิด
   
    // **เพิ่มเติม:** หากคุณต้องการให้ผู้ใช้เห็น Modal ก่อน แล้วค่อยเปลี่ยนหน้า ให้ใส่ showPage ในฟังก์ชันที่รอ Modal ปิดแทน หรือใส่ไว้ใน setTimeout เล็กน้อย
    setTimeout(() => {
        showPage('orders-page');
    }, 1000); // 1000 มิลลิวินาที (1 วินาที) เพื่อให้ Modal แสดงผลก่อนเปลี่ยนหน้า

   });
}

// Update checkout summary when page is shown
document.getElementById('checkout-page').addEventListener('click', () => {
    const summaryEl = document.getElementById('checkout-summary');
    const totalEl = document.getElementById('checkout-total');
    if (cart.length === 0) {
        summaryEl.innerHTML = '<p>ไม่มีสินค้าในตะกร้า</p>';
        totalEl.textContent = '0';
        return;
    }
    summaryEl.innerHTML = cart.map(item => `
        <div class="d-flex justify-content-between">
            <span>${item.name} (${item.size}) x ${item.quantity}</span>
            <span>฿${(item.price * item.quantity).toLocaleString()}</span>
        </div>
    `).join('');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalEl.textContent = total.toLocaleString();
});