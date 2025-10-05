import { test, expect } from "@playwright/test";

test.describe("Kinobi Pre Screening Test - Wilbur Haratua", () => {

  test("signup-resume-jobs", async ({ page }) => {
    //#regionLocators
    const loginOptionBtn = page.getByRole("button", { name: "Login" });
    const emailFld = page.getByRole("textbox", { name: "Alamat Email" });
    const passwordFld = page.getByRole("textbox", { name: "Password" });
    const signInBtn = page.locator("#form-sign-in");
    const closePopUpBtn = page.getByRole("button", { name: "No Thanks" });
    //Locator - CV Builder - General
    const resumeBuilderBtn = page.getByRole("button", { name: "Buat resume" });
    const addNewResumeBtn = page.getByRole("button", { name: "New Resume" });
    const cvTitleFld = page.getByRole("textbox", {
      name: "Wilbur Testing Resume",
    });
    const simpanBtn = page.getByRole("button", { name: "Simpan", exact: true });
    //Locator - CV Builder - Informasi Pribadi
    const namaFld = page.getByRole("textbox", { name: "Nama" });
    const nomorHandphoneFld = page.getByRole('textbox', { name: 'Nomor Handphone (Mobile)' })
    const alamatEmailFld = page.getByRole("textbox", { name: "Alamat Email" });
    const linkedInProfileFld = page.getByRole("textbox", {
      name: "Linkedin Profile URL",
    });
    const portofolioWebsiteFld = page.getByRole("textbox", {
      name: "Portfolio/Website URL",
    });
    const alamatFld = page.getByRole("textbox", { name: "Alamat (opsional)" });
    const descFld = page.getByRole("textbox", {
      name: "Deskripsi singkat tentang kamu",
    });
    const simpanLanjutBtn = page.getByRole("button", {
      name: "Simpan & Lanjutkan",
    });
    //Locator - CV Builder - Pengalaman Kerja
    const addExp = page.getByRole("button", { name: "Add experience" });
    const namaPerusahaanFld = page.getByRole("textbox", {
      name: "Nama Perusahaan",
    });
    const jabatanFld = page.getByRole("textbox", {
      name: "Jabatan/Magang/Posisi Lokasi",
    });
    const locationFld = page.getByRole("textbox", {
      name: "Enter company location, e.g.",
    });
    const descPerusahaanFld = page.getByRole("textbox", {
      name: "Deskripsi Perusahaan (",
    });
    const tglMulaiBlnFld = page.getByRole("textbox", {
      name: "Tanggal Mulai (Bulan)",
    });
    const tglmulaiThnFld = page.getByRole("textbox", {
      name: "Tanggal Mulai (Tahun)",
    });
    const tglSelesaiBlnFld = page.getByRole("textbox", {
      name: "Tanggal Selesai (Bulan)",
    });
    const tglSelesaiThnFld = page.getByRole("textbox", {
      name: "Tanggal Selesai (Tahun)",
    });
    const stillWorkingBtn = page.getByText("Saat ini saya bekerja di sini");
    //Locator - CV Builder - Pendidikan
    const addEducationBtn = page.getByRole("button", { name: "Add education" });
    const selectSchoolFld = page.getByRole("textbox", {
      name: "Nama Sekolah/Universitas",
    });
    const schoolLocFld = page.getByRole("textbox", {
      name: "Lokasi Sekolah/Universitas",
    });
    const schoolTglMulaiBlnFld = page.getByRole("textbox", {
      name: "Select start date (month)",
    });
    const schoolTglMulaiThnFld = page.getByRole("textbox", {
      name: "Select start date (year)",
    });
    const schoolTglLlsBlnFld = page.getByRole("textbox", {
      name: "Tanggal Kelulusan (Bulan)",
    });
    const schoolTglLlsThnFld = page.getByRole("textbox", {
      name: "Tanggal Kelulusan (Tahun)",
    });
    const eduLevelFld = page.getByRole("textbox", { name: "Education Level" });
    const eduDescFld = page.getByRole("textbox", {
      name: "Enter description, e.g.",
    });
    const gpaFld = page.getByRole("spinbutton", {
      name: "IPK (Opsional namun",
    });
    const gpaMax = page.getByRole("spinbutton", { name: "IPK Maksimal" });
    //Locator - Organisasi
    const addExpOrgBtn = page.getByRole('button', { name: 'Add experience' })
    const namaAcaraFld = page.getByRole('textbox', { name: 'Organisasi/Nama Acara' })
    const posisiOrgFld = page.getByRole('textbox', { name: 'Posisi/Gelar Jabatan' })
    const descOrgFld = page.getByRole('textbox', { name: 'Enter organisation' })
    const aktivitasOrgFld = page.getByRole('textbox', { name: 'Aktivitas/Acara/Lokasi' })
    const tglMulaiBlnOrgFld = page.getByRole('textbox', { name: 'Select start date (month)' })
    const tglMulaiThnOrgFld = page.getByRole('textbox', { name: 'Select start date (year)' });
    //Locator - Other
    const addAchvBtn = page.locator('button:has-text("Add experience")').first()
    const catergoryOtherFld = page.getByRole('textbox', { name: 'Kategori/Proyek/Aktivitas' })
    const catYearFld = page.getByRole('textbox', { name: 'Tahun' })
    const elaborateFld = page.getByRole('textbox', { name: 'Enter elaboration' })
    const selesaiUnduhBtn = page.getByRole('button', { name: 'Selesai & Unduh' })
    const startYourJourneyBtn = page.getByRole('button', { name: 'Start Your Journey' })
    //#endregion
    await page.goto("https://app.kinobi.ai/id/students");
    await closePopUpBtn.click();
    await loginOptionBtn.click();
    await emailFld.fill("yiwagir692@noidos.com");
    await passwordFld.fill("kinobiTesting123;");
    await expect(signInBtn).toBeEnabled();
    await page.waitForTimeout(2000);
    await signInBtn.click();
    await expect(page.getByText("Halo Wilbur!")).toBeVisible();
    await resumeBuilderBtn.click();
    await addNewResumeBtn.click();
    await cvTitleFld.fill("Wilbur - Kinobi PreScreening");
    await simpanBtn.click();
    //Input Resume Data - Informasi Pribadi
    await namaFld.fill("Wilbur Kinobi PreScreening");
    await nomorHandphoneFld.fill("0811111111231");
    await alamatEmailFld.fill("yiwagir692@noidos.com");
    await linkedInProfileFld.fill("https://www.linkedin.com/in/wilbur-haratua-b70566252/");
    await portofolioWebsiteFld.fill("https://github.com/wilburharatua/Portfolio.git ");
    await alamatFld.fill("Jl.Perintis Kemerdekaan 11");
    await descFld.fill("Wilbur Kinobi PreScreening Testing - 123");
    await simpanLanjutBtn.click();
    //Input Resume Data - Pengalaman Kerja
    await addExp.click();
    await namaPerusahaanFld.fill("Kinobi");
    await jabatanFld.fill("QA Engineer");
    await locationFld.fill("Jakarta, Indonesia");
    await descPerusahaanFld.fill("Testing 123");
    await tglMulaiBlnFld.click();
    await page.getByText("Dec").click();
    await tglmulaiThnFld.click();
    await page.getByText("2025", { exact: true }).click();
    await stillWorkingBtn.click();
    await expect(tglSelesaiBlnFld).toBeDisabled();
    await expect(tglSelesaiThnFld).toBeDisabled();
    await simpanLanjutBtn.click();
    //Input Resume Data - Education
    await addEducationBtn.click();
    await selectSchoolFld.fill("Bina Nusantara University");
    await schoolLocFld.fill("Jakarta, Indonesia");
    await schoolTglMulaiBlnFld.click();
    await page.getByRole("option", { name: "Aug" }).click();
    await schoolTglMulaiThnFld.click();
    await page.getByRole("option", { name: "2021" }).click();
    await schoolTglLlsBlnFld.click();
    await page.getByRole("option", { name: "Dec" }).click();
    await schoolTglLlsThnFld.click();
    await page.getByRole("option", { name: "2025" }).click();
    await eduLevelFld.click();
    await page.getByText("Bachelor").click();
    await eduDescFld.fill("Wilbur anythingTest123;");
    await gpaFld.fill("3.54");
    await gpaMax.fill("4");
    await simpanLanjutBtn.click();
    //Input Resume Data - Pengalaman Organisasi
    await addExpOrgBtn.click();
    await namaAcaraFld.fill('Kinobi PreScreening Test')
    await posisiOrgFld.fill('Committee')
    await descOrgFld.fill('Testing 123 Wilbur')
    await aktivitasOrgFld.fill('Jakarta, Indonesia')
    await tglMulaiBlnOrgFld.click();
    await page.getByRole('option', { name: 'Dec' }).click()
    await tglMulaiThnOrgFld.click();
    await page.getByRole('option', { name: '2025' }).click();
    await simpanLanjutBtn.click();
    //Input Resume Data - Others
    await page.waitForTimeout(500);
    await simpanLanjutBtn.click();
    //Review
    await selesaiUnduhBtn.click();
    await startYourJourneyBtn.click();
    //Validate Navigated to Job List Page
    await expect(page).toHaveURL('https://app.kinobi.ai/id/jobs')
    await expect (page.getByRole('heading', { name: 'Portal Lowongan Kerja' }).locator('span')).toBeVisible()
    //Verify job list is shown​
    await expect (page.locator('.col-md-9')).toBeVisible();
  });
});