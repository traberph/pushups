import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../components/ui/button';
import { Table, TableRow, TableCell } from '../../components/ui/table';
import { LoadingBar } from '../../components/ui/loading-bar';
import { CircularProgress } from '../../components/ui/circular-progress';


const COOLDOWN_DURATION = 10; // seconds

export const PushupPage: React.FC = () => {
  const navigate = useNavigate();
  const [cooldown, setCooldown] = useState(0);
  const [lastPushupsReceived, setLastPushupsReceived] = useState<{ time: string; promptedBy: string } | null>(null);
  const [lastPushupsSent, setLastPushupsSent] = useState<{ time: string; promptedBy: string } | null>(null);

  useEffect(() => {
    // Simulate cooldown timer
    if (cooldown > 0) {
      const timer = setInterval(() => {
        setCooldown((prev) => Math.max(0, prev - 1));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [cooldown]);

  const handlePromptUser = () => {
    if (cooldown === 0) {
      setCooldown(COOLDOWN_DURATION);
      setLastPushupsSent({ time: new Date().toLocaleString(), promptedBy: 'You' });
    //   navigate('/prompt');
    }
  };

  const cooldownProgress = (cooldown / COOLDOWN_DURATION) * 100;

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">

    <div className="container mx-auto px-4 py-8 max-w-2xl bg-gray-800 min-h-screen text-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-white">Welcome XY</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-200">Last pushups received</h2>
          <Table headers={['Time', 'Prompted by']}>
            <TableRow>
              <TableCell>{lastPushupsReceived?.time || 'No pushups received yet'}</TableCell>
              <TableCell>{lastPushupsReceived?.promptedBy || '-'}</TableCell>
            </TableRow>
          </Table>
          <div className="mt-2">
            <LoadingBar progress={cooldownProgress} color="red" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-200">Last pushups sent</h2>
          <Table headers={['Time', 'Prompted to']}>
            <TableRow>
              <TableCell>{lastPushupsSent?.time || 'No pushups sent yet'}</TableCell>
              <TableCell>{lastPushupsSent?.promptedBy || '-'}</TableCell>
            </TableRow>
          </Table>
        </div>

        <div className="flex justify-center items-center flex-grow space-x-4 mt-10">
             <CircularProgress progress={cooldownProgress} size={150} strokeWidth={2} text="Prompt a user" 
             onClick={handlePromptUser} disabled={cooldown > 0}/>
        </div>
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <Button variant="secondary" onClick={() => navigate('/friends')} isLoading={false}>
            Add Friends
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
};
