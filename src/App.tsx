import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { VerificationPage } from './pages/VerificationPage';
import { FullDetailsPage } from './pages/FullDetailsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { DEMO_BATCH } from './data/demoBatch';

// Wrapper to validate dynamic batchId routes
const BatchVerificationWrapper: React.FC = () => {
  const { batchId } = useParams<{ batchId: string }>();
  if (batchId && batchId.toUpperCase() !== DEMO_BATCH.batchId.toUpperCase()) {
    return <NotFoundPage />;
  }
  return <VerificationPage />;
};

const BatchDetailsWrapper: React.FC = () => {
  const { batchId } = useParams<{ batchId: string }>();
  if (batchId && batchId.toUpperCase() !== DEMO_BATCH.batchId.toUpperCase()) {
    return <NotFoundPage />;
  }
  return <FullDetailsPage />;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root redirect to the exact verified demo batch */}
        <Route path="/" element={<Navigate to={`/verify/${DEMO_BATCH.batchId}`} replace />} />
        <Route path="/verify" element={<Navigate to={`/verify/${DEMO_BATCH.batchId}`} replace />} />

        {/* Primary Verification Summary Route */}
        <Route path="/verify/:batchId" element={<BatchVerificationWrapper />} />

        {/* Full Verification Details Route */}
        <Route path="/verify/:batchId/details" element={<BatchDetailsWrapper />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
