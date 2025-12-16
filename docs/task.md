🎯 FUNGSI UTAMA WEBSITE INI
1️⃣ Untuk USER (Frontend View)

User bisa:

Register akun

Login & logout

Lihat profile

Ganti email

Ganti password

Reset password

Lihat riwayat aktivitas akun

Tampilan boleh sederhana (EJS / HTML biasa).
Nilainya ada di backend & testing, bukan UI.




2️⃣ Untuk BACKEND (INI YANG PENTING)

Backend kamu akan:

Mengelola autentikasi

Mengamankan akun

Mencegah abuse

Mencatat aktivitas

Memastikan semua logic ter-test

Ini real backend engineering, bukan CRUD main-main.




🖥️ Halaman User

/register

/login

/profile

/change-email

/change-password

/activity-log

Semua halaman ini hanya frontend tipis, isinya:

Form

Fetch API ke backend

Handle response


1️⃣ Authentication System

Register

Login

Logout

Refresh token

Reset password via email (mock boleh)

Change email & password

➡ Semua endpoint HARUS ada test-nya


2️⃣ Account Security Features

Rate limit (login & reset password)

JWT + refresh token

Protected routes

Invalid token handling

Expired token handling

➡ Ini bahan integration testing paling penting


3️⃣ User Profile & Activity

Get profile

Update profile

Soft delete account

Account status (active / suspended)

➡ Cocok buat test:

authorization

forbidden access (403)



4️⃣ Audit Log (INI NAIK LEVEL)

Simpan log:

login

logout

password change

email change

Timestamp + userId

➡ Ini bukan CRUD biasa, ini real backend feature.


🧪 APA YANG KAMU TEST (INI INTINYA)
🔹 Unit Test

Test FUNCTION, bukan route:

hashPassword()

comparePassword()

generateToken()

validateEmail()

rateLimit logic


🔹 Integration Test

Test API FLOW:

register → login → access protected route

login gagal

token invalid

token expired

user suspended → access ditolak

PAKAI:

Jest / Mocha

Supertest




🔹 Manual Test (Postman)

Simulasi user iseng

Kirim request salah

Tanpa token

Token palsu




🏁 KAPAN PROJECT INI DIANGGAP SELESAI?

Kalau:

Semua endpoint punya test

Test bisa dijalankan 1 command

Coverage ≥ 70%

Kamu berani refactor tanpa takut rusak

➡ TAHAP 4 = LULUS

🔥 LANGKAH SELANJUTNYA (SETELAH INI)

Baru setelah ini kamu:

masuk Database Optimization

atau Real-time (Socket)

atau Deployment + Docker