import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
 
    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Fundatia Sinca';
 
    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: '#fff8e0',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <img
              alt="Fundatia Sinca"
              height={200}
              src="https://images.prismic.io/sinca/65dbac393a605798c18c39ef_logo-removebg-preview.png?auto=format%2Ccompress&fit=max&w=640"
              style={{ margin: '0 30px' }}
              width={200}
            />
          </div>
          <div
            style={{
              fontSize: 60,
              fontStyle: 'bold',
              letterSpacing: '-0.025em',
              color: '#303f55',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}