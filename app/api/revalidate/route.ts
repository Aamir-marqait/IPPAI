import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Get the secret from query params
    const secret = request.nextUrl.searchParams.get('secret');
    
    // Check for secret to confirm this is a valid request
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: 'Invalid token' }, 
        { status: 401 }
      );
    }

    // Get the body to know what was updated
    const body = await request.json();
    
    console.log('Revalidation webhook triggered:', body);

    // Revalidate all events pages
    revalidatePath('/events');
    
    // If it's a specific event, revalidate that page too
    if (body.slug?.current) {
      revalidatePath(`/events/${body.slug.current}`);
    }

    // Also revalidate the home page if events are shown there
    revalidatePath('/');
    
    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      message: 'Successfully revalidated'
    });
  } catch (err) {
    console.error('Error revalidating:', err);
    return NextResponse.json(
      { 
        message: 'Error revalidating', 
        error: err instanceof Error ? err.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}