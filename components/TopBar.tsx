"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function TopBar() {
  const pathname = usePathname();
  const params = useSearchParams();

  return (
    <div className="flex items-center justify-between mb-8 border-b-[1px] p-2 md:py-4 md:px-6 bg-white w-[calc(100vw-61px)]">
      <div className="flex items-center">
        <div className="flex items-center gap-2 md:p-1 rounded-full">
          <Link
            href="/home?tab=summary"
            className={`flex items-center gap-2 p-2 px-3 md:px-4 md:py-3 rounded-full text-xs md:text-sm ${
              pathname.includes("/home") && params.get("tab") === "summary"
                ? "bg-[#CCFBEF] shadow-sm text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.81249 8.09609C6.90753 8.04123 6.98644 7.96231 7.04129 7.86727C7.09615 7.77223 7.12502 7.66442 7.12499 7.55469V1.92969C7.12443 1.83004 7.10006 1.73198 7.0539 1.64367C7.00774 1.55536 6.94113 1.47936 6.85964 1.42202C6.77814 1.36469 6.68412 1.32766 6.5854 1.31405C6.48669 1.30043 6.38616 1.31062 6.29218 1.34375C4.46794 1.98939 2.93383 3.26457 1.96563 4.94005C0.997427 6.61554 0.658632 8.58145 1.01015 10.4844C1.02837 10.5828 1.06995 10.6754 1.1314 10.7544C1.19285 10.8333 1.27237 10.8964 1.36327 10.9383C1.44519 10.9766 1.53456 10.9963 1.62499 10.9961C1.73469 10.9961 1.84247 10.9673 1.93749 10.9125L6.81249 8.09609ZM5.87499 2.87656V7.19375L2.13437 9.35234C2.12499 9.23438 2.12499 9.11563 2.12499 9C2.1261 7.73309 2.47678 6.49106 3.13843 5.41066C3.80007 4.33025 4.74701 3.45337 5.87499 2.87656ZM17.125 9C17.1256 10.7837 16.5393 12.518 15.4564 13.9354C14.3735 15.3528 12.8543 16.3745 11.1332 16.8428C9.41212 17.3111 7.58472 17.2 5.93298 16.5267C4.28125 15.8534 2.89698 14.6553 1.99374 13.1172C1.95164 13.0461 1.92403 12.9675 1.91251 12.8857C1.901 12.8039 1.9058 12.7207 1.92665 12.6407C1.9475 12.5608 1.98398 12.4859 2.03398 12.4201C2.08398 12.3544 2.14651 12.2992 2.21796 12.2578L8.37499 8.67422V1.5C8.37499 1.33424 8.44084 1.17527 8.55805 1.05806C8.67526 0.940848 8.83423 0.875 8.99999 0.875C10.4179 0.875723 11.8109 1.24729 13.0408 1.95282C14.2706 2.65834 15.2946 3.67328 16.0109 4.89688C16.0195 4.90938 16.0273 4.92188 16.0351 4.93516C16.043 4.94844 16.0508 4.96406 16.0578 4.97812C16.7588 6.20247 17.1268 7.58916 17.125 9Z"
                fill={pathname === "/home" ? "#212636" : "#8A94A6"}
              />
            </svg>
            Summary
          </Link>
          <Link
            href="/home?tab=sales"
            className={`flex items-center gap-2 p-2 px-3 md:px-4 md:py-3 rounded-full text-xs md:text-sm ${
              pathname.includes("/home") && params.get("tab") === "sales"
                ? "bg-[#CCFBEF] shadow-sm text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0086 8.62501L9.25 0.866412C9.13435 0.749834 8.99668 0.657407 8.84499 0.594506C8.6933 0.531604 8.53062 0.499482 8.36641 0.500006H1.125C0.95924 0.500006 0.800269 0.565854 0.683059 0.683065C0.565849 0.800275 0.500001 0.959246 0.500001 1.12501V8.36641C0.499476 8.53063 0.531598 8.6933 0.5945 8.84499C0.657402 8.99668 0.749828 9.13435 0.866407 9.25001L8.625 17.0086C8.74108 17.1247 8.87889 17.2168 9.03057 17.2796C9.18224 17.3425 9.34481 17.3748 9.50899 17.3748C9.67316 17.3748 9.83573 17.3425 9.98741 17.2796C10.1391 17.2168 10.2769 17.1247 10.393 17.0086L17.0086 10.393C17.1247 10.2769 17.2168 10.1391 17.2796 9.98741C17.3425 9.83574 17.3748 9.67317 17.3748 9.50899C17.3748 9.34481 17.3425 9.18225 17.2796 9.03057C17.2168 8.87889 17.1247 8.74108 17.0086 8.62501ZM4.5625 5.50001C4.37708 5.50001 4.19582 5.44502 4.04165 5.34201C3.88748 5.239 3.76732 5.09258 3.69636 4.92127C3.62541 4.74997 3.60684 4.56147 3.64301 4.37961C3.67919 4.19775 3.76848 4.03071 3.89959 3.89959C4.0307 3.76848 4.19775 3.67919 4.3796 3.64302C4.56146 3.60685 4.74996 3.62541 4.92127 3.69637C5.09257 3.76733 5.23899 3.88749 5.342 4.04166C5.44502 4.19583 5.5 4.37709 5.5 4.56251C5.5 4.81115 5.40123 5.0496 5.22541 5.22542C5.0496 5.40123 4.81114 5.50001 4.5625 5.50001Z"
                fill={
                  pathname.includes("/home") && params.get("tab") === "sales"
                    ? "#212636"
                    : "#8A94A6"
                }
              />
            </svg>
            Sales
          </Link>
          <Link
            href="/chat"
            className={`flex items-center gap-2 p-2 px-3 md:px-4 md:py-3 rounded-full text-xs md:text-sm ${
              pathname === "/chat"
                ? "bg-[#CCFBEF] shadow-sm text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.3125 0.875C6.24119 0.877275 4.25538 1.70111 2.79074 3.16574C1.32611 4.63038 0.502275 6.61619 0.5 8.6875V15.2758C0.500413 15.6003 0.629526 15.9115 0.859022 16.141C1.08852 16.3705 1.39966 16.4996 1.72422 16.5H8.3125C10.3845 16.5 12.3716 15.6769 13.8368 14.2118C15.3019 12.7466 16.125 10.7595 16.125 8.6875C16.125 6.6155 15.3019 4.62836 13.8368 3.16323C12.3716 1.6981 10.3845 0.875 8.3125 0.875ZM10.5 10.875H5.5C5.33424 10.875 5.17527 10.8092 5.05806 10.6919C4.94085 10.5747 4.875 10.4158 4.875 10.25C4.875 10.0842 4.94085 9.92527 5.05806 9.80806C5.17527 9.69085 5.33424 9.625 5.5 9.625H10.5C10.6658 9.625 10.8247 9.69085 10.9419 9.80806C11.0592 9.92527 11.125 10.0842 11.125 10.25C11.125 10.4158 11.0592 10.5747 10.9419 10.6919C10.8247 10.8092 10.6658 10.875 10.5 10.875ZM10.5 8.375H5.5C5.33424 8.375 5.17527 8.30915 5.05806 8.19194C4.94085 8.07473 4.875 7.91576 4.875 7.75C4.875 7.58424 4.94085 7.42527 5.05806 7.30806C5.17527 7.19085 5.33424 7.125 5.5 7.125H10.5C10.6658 7.125 10.8247 7.19085 10.9419 7.30806C11.0592 7.42527 11.125 7.58424 11.125 7.75C11.125 7.91576 11.0592 8.07473 10.9419 8.19194C10.8247 8.30915 10.6658 8.375 10.5 8.375Z"
                fill={pathname === "/chat" ? "#212636" : "#8A94A6"}
              />
            </svg>
            Chats
          </Link>
        </div>
      </div>
    </div>
  );
}
