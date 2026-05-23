import { NextRequest, NextResponse } from 'next/server';
export declare function POST(req: NextRequest): Promise<NextResponse<{
    message: string;
}> | NextResponse<{
    success: boolean;
    interests: string[];
}>>;
