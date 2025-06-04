import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Image generation
export default async function Icon() {
  // Create a blue background with BT text
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: '#0063e6',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '50%',
          fontWeight: 'bold',
        }}
      >
        BT
      </div>
    ),
    {
      ...size,
    }
  );
} 