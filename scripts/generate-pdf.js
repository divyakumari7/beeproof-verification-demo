import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateLabReport() {
  const reportsDir = path.join(__dirname, '..', 'public', 'reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 dimensions in points
  const { width, height } = page.getSize();

  const fontHelvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontHelveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontCourier = await pdfDoc.embedFont(StandardFonts.Courier);

  // Palette
  const colorDark = rgb(0.06, 0.09, 0.16); // Slate 900
  const colorSlate = rgb(0.35, 0.42, 0.52); // Slate 500
  const colorLightBg = rgb(0.96, 0.98, 0.99); // Slate 50
  const colorGreen = rgb(0.02, 0.59, 0.41); // Emerald 600
  const colorAmber = rgb(0.85, 0.47, 0.02); // Brand Amber 600
  const colorBorder = rgb(0.85, 0.88, 0.92); // Border

  // Header Banner
  page.drawRectangle({
    x: 0,
    y: height - 100,
    width: width,
    height: 100,
    color: rgb(0.06, 0.09, 0.16),
  });

  // Green accent strip
  page.drawRectangle({
    x: 0,
    y: height - 104,
    width: width,
    height: 4,
    color: colorGreen,
  });

  // Header Texts
  page.drawText('NATIONAL AGRO-FOOD QUALITY & NMR RESEARCH LABORATORY', {
    x: 40,
    y: height - 42,
    size: 13,
    font: fontHelveticaBold,
    color: rgb(1, 1, 1),
  });

  page.drawText('Accredited Analytical Testing Facility • ISO/IEC 17025:2017 Certified', {
    x: 40,
    y: height - 60,
    size: 9,
    font: fontHelvetica,
    color: rgb(0.8, 0.85, 0.9),
  });

  page.drawText('BEEPROOF QUALITY ASSURANCE PROGRAM • CERTIFICATE OF ANALYSIS', {
    x: 40,
    y: height - 80,
    size: 8.5,
    font: fontHelveticaBold,
    color: rgb(0.96, 0.62, 0.04), // Amber
  });

  // Certificate Meta Block
  page.drawRectangle({
    x: 40,
    y: height - 200,
    width: width - 80,
    height: 80,
    color: colorLightBg,
    borderColor: colorBorder,
    borderWidth: 1,
  });

  page.drawText('CERTIFICATE NUMBER:', {
    x: 55,
    y: height - 130,
    size: 9,
    font: fontHelveticaBold,
    color: colorSlate,
  });
  page.drawText('BP-NABL-2026-00492', {
    x: 180,
    y: height - 130,
    size: 10,
    font: fontHelveticaBold,
    color: colorDark,
  });

  page.drawText('SAMPLE IDENTIFIER:', {
    x: 55,
    y: height - 150,
    size: 9,
    font: fontHelveticaBold,
    color: colorSlate,
  });
  page.drawText('BP-2026-SUN-001 (Sundarbans Mangrove Cluster)', {
    x: 180,
    y: height - 150,
    size: 9.5,
    font: fontHelveticaBold,
    color: colorDark,
  });

  page.drawText('TESTING PROTOCOL:', {
    x: 55,
    y: height - 170,
    size: 9,
    font: fontHelveticaBold,
    color: colorSlate,
  });
  page.drawText('NMR Spectroscopy + Stable Isotope EA-IRMS (C4) + Physicochemical', {
    x: 180,
    y: height - 170,
    size: 9,
    font: fontHelvetica,
    color: colorDark,
  });

  page.drawText('ISSUE DATE:', {
    x: 55,
    y: height - 190,
    size: 9,
    font: fontHelveticaBold,
    color: colorSlate,
  });
  page.drawText('August 25, 2026', {
    x: 180,
    y: height - 190,
    size: 9,
    font: fontHelvetica,
    color: colorDark,
  });

  page.drawText('STATUS:', {
    x: 380,
    y: height - 130,
    size: 9,
    font: fontHelveticaBold,
    color: colorSlate,
  });

  page.drawRectangle({
    x: 435,
    y: height - 136,
    width: 90,
    height: 18,
    color: rgb(0.82, 0.98, 0.9),
    borderColor: colorGreen,
    borderWidth: 1,
  });
  page.drawText('PASS / VERIFIED', {
    x: 442,
    y: height - 130,
    size: 8.5,
    font: fontHelveticaBold,
    color: colorGreen,
  });

  // Table Section Title
  page.drawText('ANALYTICAL TEST RESULTS & PHYSICOCHEMICAL PROFILE', {
    x: 40,
    y: height - 225,
    size: 11,
    font: fontHelveticaBold,
    color: colorDark,
  });

  // Table Header
  const tableY = height - 240;
  page.drawRectangle({
    x: 40,
    y: tableY - 20,
    width: width - 80,
    height: 20,
    color: rgb(0.12, 0.16, 0.23),
  });

  page.drawText('PARAMETER / TEST', { x: 50, y: tableY - 14, size: 8, font: fontHelveticaBold, color: rgb(1, 1, 1) });
  page.drawText('OBSERVED', { x: 230, y: tableY - 14, size: 8, font: fontHelveticaBold, color: rgb(1, 1, 1) });
  page.drawText('SPECIFICATION / STANDARD', { x: 310, y: tableY - 14, size: 8, font: fontHelveticaBold, color: rgb(1, 1, 1) });
  page.drawText('VERDICT', { x: 470, y: tableY - 14, size: 8, font: fontHelveticaBold, color: rgb(1, 1, 1) });

  // Rows Data
  const rows = [
    { param: '1. Moisture Content (Refractometry)', val: '17.8%', spec: 'Standard Max 20.0%', verdict: 'COMPLIANT' },
    { param: '2. Pollen Purity (Floral Spectrum)', val: '96.2%', spec: 'Min 70.0% (Khalisha/Goran)', verdict: 'VERIFIED' },
    { param: '3. 1H-NMR Spectroscopy Profile', val: 'PASSED', spec: 'Authentic / Unadulterated', verdict: 'PASSED' },
    { param: '4. C4 Sugar Adulteration (EA-IRMS)', val: 'NEGATIVE', spec: '0.0% Added Sugar (Limit <7%)', verdict: 'NEGATIVE' },
    { param: '5. Hydroxymethylfurfural (HMF HPLC)', val: '12.4 mg/kg', spec: 'Max 80 mg/kg (FSSAI)', verdict: 'COMPLIANT' },
    { param: '6. Diastase Enzyme Activity', val: '18.6 DN', spec: 'Min 8.0 Schade Units', verdict: 'COMPLIANT' },
    { param: '7. Reducing Sugars (Fructose + Glucose)', val: '72.4%', spec: 'Min 65.0%', verdict: 'COMPLIANT' },
    { param: '8. Sucrose Content', val: '1.8%', spec: 'Max 5.0%', verdict: 'COMPLIANT' },
  ];

  let currentY = tableY - 20;
  rows.forEach((row, i) => {
    currentY -= 24;
    // alternating bg
    if (i % 2 === 0) {
      page.drawRectangle({
        x: 40,
        y: currentY,
        width: width - 80,
        height: 24,
        color: rgb(0.97, 0.98, 0.99),
      });
    }

    page.drawLine({
      start: { x: 40, y: currentY },
      end: { x: width - 40, y: currentY },
      thickness: 0.5,
      color: colorBorder,
    });

    page.drawText(row.param, { x: 50, y: currentY + 7, size: 8.5, font: fontHelvetica, color: colorDark });
    page.drawText(row.val, {
      x: 230,
      y: currentY + 7,
      size: 8.5,
      font: fontHelveticaBold,
      color: row.val === 'PASSED' || row.val === 'NEGATIVE' ? colorGreen : colorDark,
    });
    page.drawText(row.spec, { x: 310, y: currentY + 7, size: 8, font: fontHelvetica, color: colorSlate });
    page.drawText(row.verdict, {
      x: 470,
      y: currentY + 7,
      size: 8,
      font: fontHelveticaBold,
      color: colorGreen,
    });
  });

  // Summary Verdict Box
  currentY -= 70;
  page.drawRectangle({
    x: 40,
    y: currentY,
    width: width - 80,
    height: 55,
    color: rgb(0.94, 0.99, 0.96),
    borderColor: colorGreen,
    borderWidth: 1.5,
  });

  page.drawText('QUALITY CERTIFICATION VERDICT: FULL CONFORMANCE (PASS)', {
    x: 55,
    y: currentY + 36,
    size: 10,
    font: fontHelveticaBold,
    color: colorGreen,
  });

  page.drawText(
    'The sample tested conforms to all FSSAI & international Codex Alimentarius standards for unadulterated raw honey.',
    {
      x: 55,
      y: currentY + 20,
      size: 8,
      font: fontHelvetica,
      color: colorDark,
    }
  );

  page.drawText('NMR profile confirms zero exogenous sugar sirup additions (C3/C4).', {
    x: 55,
    y: currentY + 8,
    size: 7.5,
    font: fontHelvetica,
    color: colorSlate,
  });

  // Cryptographic Ledger Hash Box
  currentY -= 65;
  page.drawRectangle({
    x: 40,
    y: currentY,
    width: width - 80,
    height: 50,
    color: rgb(0.06, 0.09, 0.16),
  });

  page.drawText('CRYPTOGRAPHIC PROVENANCE ANCHOR (BEEPROOF LEDGER)', {
    x: 55,
    y: currentY + 33,
    size: 8,
    font: fontHelveticaBold,
    color: colorAmber,
  });

  page.drawText('Tx Hash: 0x903bc9ed078535a77dfc47da1eb44d20eb6c1365ec40eb049d49b8c44dbe8f5', {
    x: 55,
    y: currentY + 18,
    size: 7,
    font: fontCourier,
    color: rgb(0.8, 0.95, 0.85),
  });

  page.drawText('State Hash: 0xa910dc26b92a5e5e302b51a4209f35c671000773444a6d9645b38169ed0659a4', {
    x: 55,
    y: currentY + 6,
    size: 7,
    font: fontCourier,
    color: rgb(0.7, 0.85, 0.95),
  });

  // Signatures & Stamp
  currentY -= 90;

  page.drawText('Dr. Ananya Sen, Ph.D.', {
    x: 60,
    y: currentY + 25,
    size: 9.5,
    font: fontHelveticaBold,
    color: colorDark,
  });
  page.drawText('Lead Analytical Chemist & NMR Specialist', {
    x: 60,
    y: currentY + 12,
    size: 8,
    font: fontHelvetica,
    color: colorSlate,
  });
  page.drawLine({
    start: { x: 60, y: currentY + 40 },
    end: { x: 220, y: currentY + 40 },
    thickness: 1,
    color: colorDark,
  });

  page.drawText('Dr. R. K. Mukherjee', {
    x: 360,
    y: currentY + 25,
    size: 9.5,
    font: fontHelveticaBold,
    color: colorDark,
  });
  page.drawText('Quality Director, Accredited Food Lab', {
    x: 360,
    y: currentY + 12,
    size: 8,
    font: fontHelvetica,
    color: colorSlate,
  });
  page.drawLine({
    start: { x: 360, y: currentY + 40 },
    end: { x: 520, y: currentY + 40 },
    thickness: 1,
    color: colorDark,
  });

  // Footer Disclaimer
  page.drawLine({
    start: { x: 40, y: 40 },
    end: { x: width - 40, y: 40 },
    thickness: 0.5,
    color: colorBorder,
  });

  page.drawText('This certificate is cryptographically linked to BEEPROOF batch BP-2026-SUN-001. Public Verification Portal.', {
    x: 40,
    y: 28,
    size: 7.5,
    font: fontHelvetica,
    color: colorSlate,
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(reportsDir, 'BP-2026-SUN-001-Lab-Report.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Successfully generated static PDF report at: ${outputPath}`);
}

generateLabReport().catch(console.error);
