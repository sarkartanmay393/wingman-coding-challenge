"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 h-screen w-[60px] bg-[#115E56] flex flex-col items-center py-4 gap-8 border-r border-[#DCDFE4] z-50">
      <Image alt="" src="/logo.svg" width={34} height={34} />
      <div className="w-7 h-px bg-[#134E48]" />
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <Link
            href="/home?tab=summary"
            className={`w-9 h-9  ${
              pathname.includes("/home") ? `bg-white` : "hover:bg-white/10"
            } rounded-lg flex items-center justify-center`}
          >
            <svg
              width="24"
              height="22"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 9.22737V16.45C17.5 16.7815 17.3683 17.0995 17.1339 17.3339C16.8995 17.5683 16.5815 17.7 16.25 17.7H13.125C12.7935 17.7 12.4755 17.5683 12.2411 17.3339C12.0067 17.0995 11.875 16.7815 11.875 16.45V13.325C11.875 13.1593 11.8092 13.0003 11.6919 12.8831C11.5747 12.7659 11.4158 12.7 11.25 12.7H8.75C8.58424 12.7 8.42527 12.7659 8.30806 12.8831C8.19085 13.0003 8.125 13.1593 8.125 13.325V16.45C8.125 16.7815 7.9933 17.0995 7.75888 17.3339C7.52446 17.5683 7.20652 17.7 6.875 17.7H3.75C3.41848 17.7 3.10054 17.5683 2.86612 17.3339C2.6317 17.0995 2.5 16.7815 2.5 16.45V9.22737C2.49997 9.05437 2.53586 8.88325 2.60538 8.72483C2.67491 8.56642 2.77656 8.42416 2.90391 8.30706L9.15391 2.41018L9.1625 2.40159C9.39261 2.19232 9.69248 2.07635 10.0035 2.07635C10.3146 2.07635 10.6144 2.19232 10.8445 2.40159C10.8472 2.40465 10.8501 2.40752 10.8531 2.41018L17.1031 8.30706C17.2292 8.42478 17.3295 8.56731 17.3978 8.7257C17.4661 8.88408 17.5009 9.05489 17.5 9.22737Z"
                fill={pathname.includes("home") ? `#115E56` : `#CCFBEF`}
              />
            </svg>
          </Link>
          <Link
            href="/chat"
            className={`w-9 h-9 ${
              pathname.includes("/chat") ? `bg-white` : "hover:bg-white/10"
            } rounded-lg flex items-center justify-center`}
          >
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
              <path
                d="M15.625 7.888C15.623 9.959 14.799 11.945 13.334 13.409C11.87 14.874 9.884 15.698 7.813 15.7H1.224C0.9 15.7 0.589 15.57 0.359 15.341C0.13 15.111 0 14.8 0 14.476V7.888C0 5.816 0.823 3.828 2.288 2.363C3.753 0.898 5.74 0.075 7.813 0.075C9.885 0.075 11.872 0.898 13.337 2.363C14.802 3.828 15.625 5.816 15.625 7.888Z"
                fill={pathname.includes("/chat") ? `#115E56` : `#CCFBEF`}
              />
            </svg>
          </Link>
          <Link
            href="#"
            className={`w-9 h-9 hover:bg-white/10 rounded-lg flex items-center justify-center`}
          >
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 15.3242C17.0699 15.4171 17.1125 15.5276 17.123 15.6433C17.1336 15.759 17.1116 15.8754 17.0597 15.9793C17.0078 16.0833 16.9279 16.1707 16.829 16.2318C16.7301 16.2928 16.6162 16.3251 16.5 16.325H1.5C1.38393 16.325 1.27015 16.2927 1.17142 16.2317C1.07268 16.1706 0.992891 16.0833 0.940983 15.9795C0.889075 15.8757 0.867102 15.7595 0.877526 15.6439C0.887949 15.5283 0.930358 15.4179 1 15.325C1.55343 14.583 2.29142 13.9988 3.14063 13.6305C2.67514 13.2056 2.34898 12.65 2.20496 12.0364C2.06094 11.4229 2.10579 10.7802 2.33362 10.1926C2.56145 9.60498 2.96161 9.1 3.48159 8.74392C4.00157 8.38784 4.61705 8.1973 5.24727 8.1973C5.87748 8.1973 6.49297 8.38784 7.01294 8.74392C7.53292 9.1 7.93308 9.60498 8.16091 10.1926C8.38874 10.7802 8.43359 11.4229 8.28957 12.0364C8.14555 12.65 7.81939 13.2056 7.35391 13.6305C7.96658 13.8953 8.52333 14.2742 8.99453 14.7469C9.46573 14.2742 10.0225 13.8953 10.6352 13.6305C10.1697 13.2056 9.84351 12.65 9.69949 12.0364C9.55547 11.4229 9.60032 10.7802 9.82815 10.1926C10.056 9.60498 10.4561 9.1 10.9761 8.74392C11.4961 8.38784 12.1116 8.1973 12.7418 8.1973C13.372 8.1973 13.9875 8.38784 14.5075 8.74392C15.0274 9.1 15.4276 9.60498 15.6554 10.1926C15.8833 10.7802 15.9281 11.4229 15.7841 12.0364C15.6401 12.65 15.3139 13.2056 14.8484 13.6305C15.7016 13.9969 16.4435 14.5809 17 15.3242ZM1.125 8.07501C1.19066 8.12425 1.26538 8.16008 1.34489 8.18045C1.4244 8.20082 1.50714 8.20533 1.58839 8.19372C1.66964 8.18212 1.74781 8.15462 1.81843 8.1128C1.88906 8.07099 1.95075 8.01567 2 7.95001C2.37841 7.44546 2.86909 7.03595 3.4332 6.7539C3.9973 6.47185 4.61932 6.32501 5.25 6.32501C5.88068 6.32501 6.5027 6.47185 7.0668 6.7539C7.63091 7.03595 8.12159 7.44546 8.5 7.95001C8.55822 8.02763 8.63371 8.09063 8.72049 8.13402C8.80728 8.17742 8.90297 8.20001 9 8.20001C9.09703 8.20001 9.19272 8.17742 9.27951 8.13402C9.36629 8.09063 9.44178 8.02763 9.5 7.95001C9.87841 7.44546 10.3691 7.03595 10.9332 6.7539C11.4973 6.47185 12.1193 6.32501 12.75 6.32501C13.3807 6.32501 14.0027 6.47185 14.5668 6.7539C15.1309 7.03595 15.6216 7.44546 16 7.95001C16.0493 8.01567 16.111 8.07098 16.1817 8.11277C16.2524 8.15457 16.3306 8.18204 16.4119 8.19361C16.4932 8.20518 16.5759 8.20063 16.6555 8.18021C16.735 8.15979 16.8097 8.12391 16.8754 8.07462C16.9411 8.02532 16.9964 7.96357 17.0382 7.8929C17.08 7.82223 17.1074 7.74402 17.119 7.66273C17.1306 7.58144 17.126 7.49867 17.1056 7.41914C17.0852 7.33961 17.0493 7.26489 17 7.19923C16.4466 6.45745 15.7085 5.87351 14.8594 5.50548C15.3249 5.08063 15.651 4.52498 15.795 3.91144C15.9391 3.2979 15.8942 2.65516 15.6664 2.06757C15.4386 1.47998 15.0384 0.975003 14.5184 0.618922C13.9984 0.262842 13.3829 0.0722961 12.7527 0.0722961C12.1225 0.0722961 11.507 0.262842 10.9871 0.618922C10.4671 0.975003 10.0669 1.47998 9.83909 2.06757C9.61126 2.65516 9.56641 3.2979 9.71043 3.91144C9.85445 4.52498 10.1806 5.08063 10.6461 5.50548C10.0334 5.7703 9.47667 6.14916 9.00547 6.62188C8.53427 6.14916 7.97751 5.7703 7.36484 5.50548C7.83033 5.08063 8.15649 4.52498 8.30051 3.91144C8.44453 3.2979 8.39968 2.65516 8.17185 2.06757C7.94402 1.47998 7.54386 0.975003 7.02388 0.618922C6.5039 0.262842 5.88842 0.0722961 5.2582 0.0722961C4.62799 0.0722961 4.0125 0.262842 3.49253 0.618922C2.97255 0.975003 2.57239 1.47998 2.34456 2.06757C2.11673 2.65516 2.07188 3.2979 2.2159 3.91144C2.35992 4.52498 2.68608 5.08063 3.15156 5.50548C2.29838 5.87219 1.55645 6.45652 1 7.20001C0.950755 7.26567 0.914924 7.34038 0.894554 7.41989C0.874184 7.4994 0.869675 7.58214 0.881282 7.66339C0.892889 7.74465 0.920387 7.82282 0.962204 7.89344C1.00402 7.96406 1.05934 8.02576 1.125 8.07501Z"
                fill={pathname.includes("/#") ? `#115E56` : `#CCFBEF`}
              />
            </svg>
          </Link>
        </div>

        <Link
          href="#"
          className="w-9 h-9 rounded-lg hover:bg-white/10 flex items-center justify-center"
        >
          <SettingsLogo pathname={pathname} />
        </Link>
      </div>
    </nav>
  );
}

const SettingsLogo = ({ pathname }: { pathname: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.875 9.16873C15.8781 9.05623 15.8781 8.94373 15.875 8.83123L17.0406 7.37498C17.1017 7.29852 17.1441 7.20877 17.1641 7.11297C17.1842 7.01716 17.1815 6.91798 17.1563 6.82341C16.9648 6.10525 16.679 5.41564 16.3063 4.77263C16.2574 4.6885 16.1896 4.61694 16.1082 4.56364C16.0268 4.51034 15.9341 4.47677 15.8375 4.4656L13.9844 4.25935C13.9073 4.1781 13.8292 4.09998 13.75 4.02498L13.5313 2.16716C13.52 2.07045 13.4863 1.97771 13.4329 1.89633C13.3794 1.81494 13.3077 1.74717 13.2234 1.69841C12.5805 1.32595 11.8908 1.04064 11.1727 0.849975C11.0781 0.824709 10.9789 0.822009 10.8831 0.842093C10.7873 0.862176 10.6976 0.904481 10.6211 0.9656L9.16876 2.12497C9.05626 2.12497 8.94376 2.12497 8.83126 2.12497L7.37501 0.961693C7.29855 0.900575 7.2088 0.85827 7.113 0.838186C7.01719 0.818103 6.91801 0.820803 6.82344 0.846068C6.10528 1.0375 5.41567 1.32332 4.77266 1.69607C4.68853 1.74492 4.61697 1.81273 4.56367 1.89411C4.51037 1.97548 4.4768 2.06818 4.46563 2.16482L4.25938 4.02107C4.17813 4.09867 4.10001 4.1768 4.02501 4.25544L2.16719 4.46872C2.07048 4.47998 1.97774 4.51367 1.89636 4.56711C1.81497 4.62055 1.7472 4.69227 1.69844 4.77654C1.32606 5.41963 1.0405 6.10923 0.849224 6.82732C0.824065 6.92195 0.821492 7.02116 0.841712 7.11697C0.861931 7.21277 0.904378 7.30249 0.96563 7.37888L2.12501 8.83123C2.12501 8.94373 2.12501 9.05623 2.12501 9.16873L0.961724 10.625C0.900605 10.7014 0.8583 10.7912 0.838217 10.887C0.818134 10.9828 0.820833 11.082 0.846099 11.1765C1.03753 11.8947 1.32335 12.5843 1.6961 13.2273C1.74495 13.3114 1.81276 13.383 1.89414 13.4363C1.97551 13.4896 2.06821 13.5232 2.16485 13.5344L4.01797 13.7406C4.09558 13.8219 4.1737 13.9 4.25235 13.975L4.46876 15.8328C4.48001 15.9295 4.5137 16.0222 4.56714 16.1036C4.62058 16.185 4.6923 16.2528 4.77657 16.3015C5.41967 16.6739 6.10926 16.9595 6.82735 17.1508C6.92198 17.1759 7.02119 17.1785 7.117 17.1583C7.21281 17.1381 7.30252 17.0956 7.37891 17.0344L8.83126 15.875C8.94376 15.8781 9.05626 15.8781 9.16876 15.875L10.625 17.0406C10.7015 17.1017 10.7912 17.144 10.887 17.1641C10.9828 17.1842 11.082 17.1815 11.1766 17.1562C11.8948 16.9651 12.5845 16.6793 13.2274 16.3062C13.3115 16.2574 13.383 16.1896 13.4363 16.1082C13.4896 16.0268 13.5232 15.9341 13.5344 15.8375L13.7406 13.9844C13.8219 13.9073 13.9 13.8291 13.975 13.75L15.8328 13.5312C15.9295 13.52 16.0223 13.4863 16.1037 13.4328C16.185 13.3794 16.2528 13.3077 16.3016 13.2234C16.674 12.5803 16.9595 11.8907 17.1508 11.1726C17.1759 11.078 17.1785 10.9788 17.1583 10.883C17.1381 10.7872 17.0956 10.6975 17.0344 10.6211L15.875 9.16873ZM9.00001 12.125C8.38194 12.125 7.77775 11.9417 7.26385 11.5983C6.74995 11.2549 6.34941 10.7669 6.11288 10.1959C5.87636 9.62484 5.81447 8.99651 5.93505 8.39032C6.05563 7.78413 6.35326 7.22731 6.7903 6.79027C7.22734 6.35323 7.78416 6.0556 8.39035 5.93502C8.99654 5.81444 9.62487 5.87633 10.1959 6.11285C10.7669 6.34938 11.255 6.74991 11.5983 7.26382C11.9417 7.77772 12.125 8.38191 12.125 8.99998C12.125 9.82878 11.7958 10.6236 11.2097 11.2097C10.6237 11.7957 9.82881 12.125 9.00001 12.125Z"
      fill={pathname.includes("/settings") ? `#115E56` : `#CCFBEF`}
    />
  </svg>
);
