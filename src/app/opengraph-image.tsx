import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'BraseltonTech';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0063e6',
          padding: 48,
        }}
      >
        <div style={{ fontSize: 64, marginBottom: 24, color: '#333' }}>Welcome to</div>
        <div style={{ 
          fontWeight: 'bold', 
          display: 'flex',
          alignItems: 'center',
          marginBottom: 48
        }}>
          BraseltonTech
        </div>
        <div style={{ 
          fontSize: 48, 
          marginTop: 24, 
          color: '#666', 
          textAlign: 'center',
          maxWidth: '80%'
        }}>
          Building the Next Tech Community
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 