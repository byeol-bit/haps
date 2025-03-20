import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",  // 클라이언트 요청을 "/api/*" 형태로 보낼 때
        destination: "http://e2m3.iptime.org:8889/:path*", // 실제 API 서버로 요청
      },
    ];
  },
};

export default nextConfig;
