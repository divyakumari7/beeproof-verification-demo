export interface LabMetric {
  id: string;
  name: string;
  value: string;
  standard: string;
  verdict: 'PASS' | 'NEGATIVE' | 'COMPLIANT' | 'VERIFIED';
  highlight?: boolean;
}

export interface LifecycleStage {
  stageNumber: number;
  title: string;
  organization: string;
  description: string;
  date: string;
  lot?: string;
  trackingId?: string;
  temperature?: string;
  badgeText: string;
}

export interface BlockchainRecordData {
  recordCheck: string;
  transactionHash: string;
  stateHash: string;
  blockHeight: string;
  timestamp: string;
  network: string;
  consensus: string;
  badges: string[];
  disclaimer: string;
}

export interface HoneyBatch {
  batchId: string;
  productName: string;
  brandName: string;
  brandSubtitle: string;
  portalHeader: string;
  status: 'VERIFIED' | 'PASS';
  statusText: string;
  summaryDescription: string;
  
  // Origin & Harvest
  origin: {
    title: string;
    cluster: string;
    location: string;
    region: string;
  };
  
  // Floral Source & Processing
  floral: {
    title: string;
    source: string;
    yield: string;
  };
  
  // Harvest Date & Method
  harvest: {
    title: string;
    date: string;
    method: string;
  };
  
  // Quality Verdict
  quality: {
    title: string;
    verdict: string;
    certificateNumber: string;
    status: string;
  };
  
  // Distribution & Logistics
  distribution: {
    title: string;
    status: string;
    guidelines: string;
  };
  
  // NABL Lab Metrics
  labSection: {
    title: string;
    reportPdfPath: string;
    reportFileName: string;
    metrics: LabMetric[];
  };
  
  // 5-Stage Custody Trail
  lifecycle: {
    title: string;
    totalStages: number;
    stages: LifecycleStage[];
  };
  
  // Blockchain Record
  blockchain: BlockchainRecordData;
}

export const DEMO_BATCH: HoneyBatch = {
  batchId: 'BP-2026-SUN-001',
  productName: 'Mustard Honey',
  brandName: 'BEEPROOF',
  brandSubtitle: 'Honey Traceability & Verification',
  portalHeader: 'PUBLIC CONSUMER VERIFICATION',
  status: 'VERIFIED',
  statusText: 'Provenance Confirmed',
  summaryDescription: 'Batch provenance, quality and custody records have been verified.',
  
  origin: {
    title: 'ORIGIN APIARY & HARVEST DETAILS',
    cluster: 'Sundarbans Mangrove Reserve Cluster',
    location: 'South 24 Parganas, West Bengal (Eastern)',
    region: 'Sundarbans Biosphere Reserve',
  },
  
  floral: {
    title: 'FLORAL SOURCE & PROCESSING DETAILS',
    source: 'Wild Mangrove Khalisha & Goran',
    yield: '485.5 kg',
  },
  
  harvest: {
    title: 'HARVEST DATE',
    date: '2026-08-23',
    method: 'Cold extracted below 40°C',
  },
  
  quality: {
    title: 'QUALITY VERDICT',
    verdict: 'Quality Verified (PASS)',
    certificateNumber: 'Cert #BP-NABL-2026-00492',
    status: 'PASS',
  },
  
  distribution: {
    title: 'DISTRIBUTION & RETAIL LOGISTICS DETAILS',
    status: 'Delivered to Authorized Retailer',
    guidelines: 'End-to-end cold supply chain tracking under KVIC National Honey Mission guidelines.',
  },
  
  labSection: {
    title: 'NABL LABORATORY NMR & PHYSICOCHEMICAL METRICS',
    reportPdfPath: '/reports/BP-2026-SUN-001-Lab-Report.pdf',
    reportFileName: 'BP-2026-SUN-001-Lab-Report.pdf',
    metrics: [
      {
        id: 'metric-1',
        name: 'Moisture Content',
        value: '17.8%',
        standard: 'Standard < 20%',
        verdict: 'COMPLIANT',
      },
      {
        id: 'metric-2',
        name: 'Pollen Purity',
        value: '96.2%',
        standard: 'Floral Spectrum',
        verdict: 'VERIFIED',
      },
      {
        id: 'metric-3',
        name: 'NMR Spectroscopy',
        value: 'PASSED',
        standard: 'Unadulterated',
        verdict: 'PASS',
        highlight: true,
      },
      {
        id: 'metric-4',
        name: 'C4 Sugar Adulteration',
        value: 'NEGATIVE',
        standard: '0% Added Sugar',
        verdict: 'NEGATIVE',
        highlight: true,
      }
    ],
  },
  
  lifecycle: {
    title: 'PROVENANCE CUSTODY TRAIL (5 STAGES)',
    totalStages: 5,
    stages: [
      {
        stageNumber: 1,
        title: 'Apiary Harvest Logged',
        organization: 'Rajesh Mandal • Sundarbans Mangrove Reserve Cluster, West Bengal',
        description: 'Raw comb harvest of 485.5 kg from Wild Mangrove Khalisha & Goran flora. Initial cryptographic token registered.',
        date: '8/23/2026',
        badgeText: 'Stage 1 • Harvest',
      },
      {
        stageNumber: 2,
        title: 'Cold Filtration & Processing Complete',
        organization: 'Northern Apex Honey Processing Facility • Regional Honey Processing Hub',
        description: 'Processed at 38.5°C with 200μm filtration. Diastase enzymes preserved.',
        date: '8/24/2026',
        badgeText: 'Stage 2 • Processing',
      },
      {
        stageNumber: 3,
        title: 'NABL Quality Lab Verified (PASS)',
        organization: 'National Agro-Food Quality & NMR Research Laboratory • Accredited Analytical Testing Facility',
        description: 'Certificate #BP-NABL-2026-00492: Moisture 17.8%, Pollen 96.2%, NMR PASSED, C4 Sugars NEGATIVE.',
        date: '8/25/2026',
        badgeText: 'Stage 3 • NABL Testing',
      },
      {
        stageNumber: 4,
        title: 'Tamper-Evident Consumer Packaging',
        organization: 'Northern Apex Packaging Facility • Cleanroom Packaging Depot',
        description: 'Packaged into 500g serialized units with scannable consumer verification QR tokens.',
        lot: '#LOT-SUN2026-01',
        date: '8/26/2026',
        badgeText: 'Stage 4 • Packaging',
      },
      {
        stageNumber: 5,
        title: 'Delivered to Destination Depot',
        organization: 'EcoLogistics Distribution Network Ltd.',
        description: 'Northern Apex Processing Hub, Kolkata → National Cold-Chain Depot, Delhi. Consignment tracking: #TRK-ECO-2026-8812. Transit ambient temperature: 21.4°C. Final depot handover complete.',
        trackingId: '#TRK-ECO-2026-8812',
        temperature: '21.4°C',
        date: '8/28/2026',
        badgeText: 'Stage 5 • Handover',
      }
    ]
  },
  
  blockchain: {
    recordCheck: '✓ Matches On-Chain Hash',
    transactionHash: '0x903bc9ed078535a77dfc47da1eb44d20eb6c1365ec40eb049d49b8c44dbe8f5',
    stateHash: '0xa910dc26b92a5e5e302b51a4209f35c671000773444a6d9645b38169ed0659a4',
    blockHeight: '#1',
    timestamp: '2026-08-28 14:42:19 UTC',
    network: 'Polygon PoS (Demo Ledger)',
    consensus: 'Proof of Authority',
    badges: [
      '✓ Blockchain Record Verified',
      '✓ No Tampering Detected'
    ],
    disclaimer: 'Demo Blockchain Verification Record',
  }
};
