import { NextResponse } from 'next/server';

export async function GET() {
  // Generate ads.txt content
  const adsContent = `# ads.txt file for apkmory.com
# This file is used by advertising systems to verify authorized sellers

# Google AdSense
google.com, pub-6465174352180458, DIRECT, f08c47fec0942fa0

# Add other ad networks here as needed
# Format: <domain>, <publisher_id>, <relationship>, <certification_authority_id>
# Example:
# adsystem.com, 1234567890, DIRECT
# adsystem.com, 0987654321, RESELLER

# Note: Update publisher IDs when you add new ad networks`;

  return new NextResponse(adsContent, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
}
