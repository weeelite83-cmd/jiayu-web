import { NextRequest, NextResponse } from 'next/server';
import { SearchClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const { query, count } = await request.json();
    
    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);
    const config = new Config();
    const client = new SearchClient(config, customHeaders);

    const response = await client.webSearch(
      query,
      count || 10,
      true
    );

    return NextResponse.json({
      summary: response.summary,
      results: response.web_items?.map((item) => ({
        title: item.title,
        url: item.url,
        snippet: item.snippet,
        siteName: item.site_name,
      })),
    });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: '搜索失败，请稍后重试' },
      { status: 500 }
    );
  }
}
