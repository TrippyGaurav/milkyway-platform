"use client";
import Image from "next/image";
import React from "react";

const Header = () => {
  function toggleScreen() {
    if (
      !document.fullscreenElement && // alternative standard method
      !document.webkitFullscreenElement && // alternative method for older Safari
      !document.msFullscreenElement
    ) {
      // alternative method for IE11
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
  return (
    <div className="relative flex items-center justify-center">
      <svg
        viewBox="0 0 1921 109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" w-full"
      >
        <path
          d="M699.021 65.2642C688.165 38.7225 679.89 18.4876 671.662 -2.5H1245.51C1230.25 29.062 1221.47 47.9801 1205.51 86.1541C1203.4 91.1993 1198.47 94.5 1193.01 94.5H720.04C714.554 94.5 709.606 91.1682 707.53 86.0839C704.513 78.6931 701.689 71.7881 699.021 65.2642Z"
          stroke="#4C3AC4"
          stroke-width="5"
        />
        <path
          d="M1255.75 26.9023C1259.99 15.933 1263.16 7.7547 1268.76 -0.5H1921.5V87.5H1227.35C1241.59 62.131 1248.76 44.8169 1253.97 31.4945C1254.59 29.9084 1255.18 28.38 1255.75 26.9023Z"
          fill="black"
        />
        <path
          d="M1255.75 26.9023C1259.99 15.933 1263.16 7.7547 1268.76 -0.5H1921.5V87.5H1227.35C1241.59 62.131 1248.76 44.8169 1253.97 31.4945C1254.59 29.9084 1255.18 28.38 1255.75 26.9023Z"
          fill="url(#paint0_linear_385_951)"
        />
        <path
          d="M1255.75 26.9023C1259.99 15.933 1263.16 7.7547 1268.76 -0.5H1921.5V87.5H1227.35C1241.59 62.131 1248.76 44.8169 1253.97 31.4945C1254.59 29.9084 1255.18 28.38 1255.75 26.9023Z"
          stroke="url(#paint1_linear_385_951)"
        />
        <path d="M1921 93.0001L1216 93" stroke="#1BF8F9" stroke-width="5" />
        <path
          d="M667.677 31.5557C662.918 18.2083 659.579 8.83904 653.236 -0.5H0.5V87.5H690.706C678.671 62.3644 672.486 45.0469 667.717 31.6679L667.677 31.5557Z"
          fill="black"
        />
        <path
          d="M667.677 31.5557C662.918 18.2083 659.579 8.83904 653.236 -0.5H0.5V87.5H690.706C678.671 62.3644 672.486 45.0469 667.717 31.6679L667.677 31.5557Z"
          fill="url(#paint2_linear_385_951)"
        />
        <path
          d="M667.677 31.5557C662.918 18.2083 659.579 8.83904 653.236 -0.5H0.5V87.5H690.706C678.671 62.3644 672.486 45.0469 667.717 31.6679L667.677 31.5557Z"
          stroke="url(#paint3_linear_385_951)"
        />
        <path d="M701 93H1" stroke="#1BF8F9" stroke-width="5" />
        <path
          d="M686.913 25.4105C683.296 16.2157 679.849 7.45168 676.227 -1.5H1240.57C1227.62 24.3059 1220.48 41.0293 1209.1 67.6438C1207.1 72.3312 1204.96 77.3254 1202.64 82.73C1200.36 88.0459 1195.12 91.5 1189.33 91.5H723.336C717.517 91.5 712.256 88.0129 710.01 82.6507C700.439 59.7999 693.403 41.9114 686.913 25.4105Z"
          fill="#343CBF"
        />
        <path
          d="M686.913 25.4105C683.296 16.2157 679.849 7.45168 676.227 -1.5H1240.57C1227.62 24.3059 1220.48 41.0293 1209.1 67.6438C1207.1 72.3312 1204.96 77.3254 1202.64 82.73C1200.36 88.0459 1195.12 91.5 1189.33 91.5H723.336C717.517 91.5 712.256 88.0129 710.01 82.6507C700.439 59.7999 693.403 41.9114 686.913 25.4105Z"
          fill="url(#paint4_linear_385_951)"
        />
        <path
          d="M686.913 25.4105C683.296 16.2157 679.849 7.45168 676.227 -1.5H1240.57C1227.62 24.3059 1220.48 41.0293 1209.1 67.6438C1207.1 72.3312 1204.96 77.3254 1202.64 82.73C1200.36 88.0459 1195.12 91.5 1189.33 91.5H723.336C717.517 91.5 712.256 88.0129 710.01 82.6507C700.439 59.7999 693.403 41.9114 686.913 25.4105Z"
          stroke="#1EDEF1"
          stroke-width="3"
        />
        <path
          d="M659 -11C665.988 4.48837 675.449 30.467 679.466 42.1767C684.957 58.1814 699.002 102 720.897 102C745.856 102 1157.17 102 1191.62 102C1226.06 102 1242.26 28.5456 1262 -11"
          stroke="url(#paint5_linear_385_951)"
          stroke-width="3"
        />
        <path
          d="M659 -2C666 13 675.476 38.1595 679.5 49.5C685 65 699.068 105.5 721 105.5C746 105.5 1158 105.5 1192.5 105.5C1227 105.5 1243.23 36.2987 1263 -2"
          stroke="url(#paint6_linear_385_951)"
          stroke-width="6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_385_951"
            x1="1577"
            y1="88"
            x2="1577"
            y2="-0.999993"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1C3C7D" />
            <stop offset="0.495573" stop-color="#11232F" stop-opacity="0" />
            <stop offset="1" stop-color="#425D7A" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_385_951"
            x1="1577"
            y1="88"
            x2="1577"
            y2="-9.09091"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="0.0001" stop-color="#0FAFEA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_385_951"
            x1="345"
            y1="88"
            x2="345"
            y2="-0.999993"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1C3C7D" />
            <stop offset="0.495573" stop-color="#11232F" stop-opacity="0" />
            <stop offset="1" stop-color="#425D7A" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_385_951"
            x1="345"
            y1="88"
            x2="345"
            y2="-9.09091"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="0.0001" stop-color="#0FAFEA" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_385_951"
            x1="958.964"
            y1="0.164836"
            x2="958.964"
            y2="93"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.20157" stop-color="#8130D3" />
            <stop offset="0.529616" stop-color="#353DBF" stop-opacity="0.5" />
            <stop offset="1" stop-color="#3987FA" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_385_951"
            x1="958.503"
            y1="100.516"
            x2="958.503"
            y2="-11"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4DD9DE" />
            <stop offset="0.500427" stop-color="#1CB2DE" />
            <stop offset="1" stop-color="#5DA8DF" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_385_951"
            x1="959"
            y1="106"
            x2="959"
            y2="-2.00001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#CFD0D5" />
            <stop offset="0.500427" stop-color="#292E39" />
            <stop offset="1" stop-color="#EFEFEF" />
          </linearGradient>
        </defs>
      </svg>
      <Image
        src="/logo.png"
        className="absolute top-0 left-auto h-full w-auto"
        height={400}
        width={400}
      />
      <button onClick={toggleScreen}>
        <svg
          className="absolute top-[45%] right-[8%] h-[70%] w-auto"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM4.77196 40C4.77196 59.4559 20.5441 75.228 40 75.228C59.4559 75.228 75.228 59.4559 75.228 40C75.228 20.5441 59.4559 4.77196 40 4.77196C20.5441 4.77196 4.77196 20.5441 4.77196 40Z"
            fill="url(#paint0_linear_115_4389)"
          />
          <circle
            cx="40"
            cy="40"
            r="33.0855"
            fill="url(#paint1_linear_115_4389)"
            stroke="url(#paint2_linear_115_4389)"
            stroke-width="1.6385"
          />
          <path
            d="M59.9948 21.6664V21.5831C59.9948 21.5675 59.9948 21.5571 59.9896 21.5467C59.9896 21.5311 59.9896 21.5206 59.9844 21.505C59.9844 21.4894 59.9792 21.4738 59.9792 21.4581C59.9792 21.4477 59.9792 21.4373 59.974 21.4269C59.974 21.4113 59.9688 21.3904 59.9636 21.3748C59.9636 21.3644 59.9583 21.354 59.9583 21.3488C59.9531 21.3332 59.9531 21.3123 59.9479 21.2967C59.9479 21.2863 59.9427 21.2811 59.9427 21.2707C59.9375 21.255 59.9323 21.2342 59.9271 21.2186C59.9219 21.2082 59.9219 21.1978 59.9167 21.1926L59.9011 21.1457C59.8959 21.1353 59.8959 21.1249 59.8906 21.1144C59.8854 21.0988 59.8802 21.0884 59.875 21.0728C59.8698 21.0624 59.8646 21.0467 59.8594 21.0363C59.8542 21.0259 59.849 21.0103 59.8438 20.9999C59.8386 20.9842 59.8334 20.9738 59.8281 20.9582L59.8125 20.927C59.8073 20.9113 59.7969 20.8957 59.7917 20.8853C59.7865 20.8749 59.7813 20.8697 59.7761 20.8593C59.7657 20.8436 59.7604 20.828 59.75 20.8124C59.7448 20.8072 59.7396 20.7968 59.7344 20.7916L59.7032 20.7447C59.698 20.7395 59.6927 20.7291 59.6875 20.7239C59.6771 20.7082 59.6667 20.6926 59.6563 20.6822C59.6511 20.6718 59.6459 20.6666 59.6355 20.6562C59.625 20.6457 59.6146 20.6301 59.6042 20.6197C59.5938 20.6093 59.5834 20.5989 59.5782 20.5885C59.5678 20.578 59.5626 20.5676 59.5521 20.5572C59.5157 20.5156 59.474 20.4791 59.4376 20.4427C59.4272 20.4322 59.4167 20.427 59.4063 20.4166C59.3959 20.4062 59.3855 20.3958 59.3751 20.3906C59.3647 20.3802 59.349 20.3697 59.3386 20.3593C59.3282 20.3541 59.323 20.3437 59.3126 20.3385C59.297 20.3281 59.2866 20.3177 59.2709 20.3073C59.2657 20.302 59.2553 20.2968 59.2501 20.2916L59.2032 20.2604C59.198 20.2552 59.1876 20.25 59.1824 20.2448C59.1668 20.2343 59.1512 20.2291 59.1355 20.2187C59.1251 20.2135 59.1199 20.2083 59.1095 20.2031C59.0939 20.1979 59.0782 20.1875 59.0678 20.1823L59.0366 20.1666C59.021 20.1614 59.0105 20.1562 58.9949 20.151C58.9845 20.1458 58.9689 20.1406 58.9585 20.1354C58.9481 20.1302 58.9324 20.125 58.922 20.1198C58.9064 20.1146 58.896 20.1094 58.8804 20.1042C58.8699 20.0989 58.8595 20.0989 58.8491 20.0937L58.8022 20.0781C58.7918 20.0729 58.7814 20.0729 58.7762 20.0677C58.7606 20.0625 58.745 20.0573 58.7241 20.0521C58.7137 20.0521 58.7085 20.0469 58.6981 20.0469C58.6825 20.0417 58.6616 20.0365 58.646 20.0365C58.6356 20.0365 58.6304 20.0312 58.62 20.0312C58.6044 20.026 58.5835 20.026 58.5679 20.0208C58.5575 20.0208 58.5471 20.0156 58.5367 20.0156C58.521 20.0156 58.5054 20.0104 58.4898 20.0104C58.4742 20.0104 58.4637 20.0104 58.4481 20.0052C58.4325 20.0052 58.4221 20.0052 58.4065 20H48.3296C47.4079 20 46.6632 20.7447 46.6632 21.6664C46.6632 22.5882 47.4079 23.3329 48.3296 23.3329H54.3028L43.7365 33.8992C43.0855 34.5502 43.0855 35.6073 43.7365 36.2583C44.3875 36.9093 45.4446 36.9093 46.0956 36.2583L56.6619 25.692V31.6651C56.6619 32.5869 57.4066 33.3316 58.3283 33.3316C59.2501 33.3316 59.9948 32.5869 59.9948 31.6651V21.6664ZM58.3283 46.6632C57.4066 46.6632 56.6619 47.4079 56.6619 48.3296V54.3028L46.0956 43.7365C45.4446 43.0855 44.3875 43.0855 43.7365 43.7365C43.0855 44.3874 43.0855 45.4446 43.7365 46.0956L54.3028 56.6619H48.3296C47.4079 56.6619 46.6632 57.4066 46.6632 58.3283C46.6632 59.2501 47.4079 59.9948 48.3296 59.9948H58.4117C58.4273 59.9948 58.4377 59.9948 58.4481 59.9896C58.4637 59.9896 58.4742 59.9896 58.4898 59.9844C58.5054 59.9844 58.521 59.9792 58.5367 59.9792C58.5471 59.9792 58.5575 59.9792 58.5679 59.974C58.5835 59.974 58.6044 59.9688 58.62 59.9635C58.6304 59.9635 58.6408 59.9583 58.646 59.9583C58.6616 59.9531 58.6825 59.9531 58.6981 59.9479C58.7085 59.9479 58.7137 59.9427 58.7241 59.9427C58.7397 59.9375 58.7554 59.9323 58.7762 59.9271C58.7866 59.9219 58.797 59.9219 58.8022 59.9167L58.8491 59.9011C58.8595 59.8958 58.8699 59.8958 58.8804 59.8906C58.896 59.8854 58.9064 59.8802 58.922 59.875C58.9324 59.8698 58.9481 59.8646 58.9585 59.8594C58.9689 59.8542 58.9845 59.849 58.9949 59.8438C59.0105 59.8386 59.021 59.8334 59.0366 59.8281L59.0678 59.8125C59.0835 59.8073 59.0991 59.7969 59.1095 59.7917C59.1199 59.7865 59.1251 59.7813 59.1355 59.7761C59.1512 59.7657 59.1668 59.7604 59.1824 59.75C59.1876 59.7448 59.198 59.7396 59.2032 59.7344L59.2501 59.7032C59.2553 59.698 59.2657 59.6927 59.2709 59.6875C59.2866 59.6771 59.3022 59.6667 59.3126 59.6563C59.323 59.6511 59.3282 59.6459 59.3386 59.6355C59.349 59.625 59.3647 59.6146 59.3751 59.6042C59.3855 59.5938 59.3959 59.5834 59.4063 59.5782C59.4167 59.5678 59.4272 59.5626 59.4376 59.5521C59.4584 59.5313 59.4792 59.5157 59.4949 59.4949L59.5521 59.4376C59.5626 59.4272 59.5678 59.4167 59.5782 59.4063C59.5886 59.3959 59.599 59.3855 59.6042 59.3751C59.6146 59.3647 59.625 59.349 59.6355 59.3386C59.6407 59.3282 59.6511 59.323 59.6563 59.3126C59.6667 59.297 59.6771 59.2813 59.6875 59.2709C59.6927 59.2657 59.698 59.2553 59.7032 59.2501L59.7344 59.2032C59.7396 59.198 59.7448 59.1876 59.75 59.1824C59.7604 59.1668 59.7657 59.1512 59.7761 59.1355C59.7813 59.1251 59.7865 59.1199 59.7917 59.1095C59.7969 59.0939 59.8073 59.0782 59.8125 59.0678L59.8281 59.0366C59.8334 59.021 59.8386 59.0105 59.849 58.9949C59.8542 58.9845 59.8594 58.9689 59.8646 58.9585C59.8698 58.9481 59.875 58.9324 59.8802 58.922C59.8854 58.9064 59.8906 58.896 59.8958 58.8804C59.9011 58.8699 59.9011 58.8595 59.9063 58.8491L59.9219 58.8022C59.9271 58.7918 59.9271 58.7814 59.9323 58.7762C59.9375 58.7606 59.9427 58.745 59.9479 58.7241C59.9479 58.7137 59.9531 58.7085 59.9531 58.6981C59.9583 58.6825 59.9636 58.6616 59.9636 58.646C59.9636 58.6356 59.9688 58.6252 59.9688 58.62C59.974 58.6043 59.974 58.5835 59.9792 58.5679C59.9792 58.5575 59.9844 58.5471 59.9844 58.5366C59.9844 58.521 59.9896 58.5054 59.9896 58.4898C59.9896 58.4742 59.9896 58.4637 59.9948 58.4481C59.9948 58.4377 59.9948 58.4221 60 58.4117V48.3296C59.9948 47.4079 59.2501 46.6632 58.3283 46.6632ZM25.692 23.3329H31.6651C32.5869 23.3329 33.3316 22.5882 33.3316 21.6664C33.3316 20.7447 32.5869 20 31.6651 20H21.5883C21.5727 20 21.5623 20 21.5467 20.0052C21.5311 20.0052 21.5206 20.0052 21.505 20.0104C21.4894 20.0104 21.4738 20.0156 21.4581 20.0156C21.4477 20.0156 21.4373 20.0156 21.4269 20.0208C21.4113 20.0208 21.3904 20.026 21.3748 20.0312C21.3644 20.0312 21.3592 20.0365 21.3488 20.0365C21.3332 20.0417 21.3123 20.0417 21.2967 20.0469C21.2863 20.0469 21.2811 20.0521 21.2707 20.0521C21.255 20.0573 21.2342 20.0625 21.2186 20.0677C21.2082 20.0729 21.1978 20.0729 21.1926 20.0781L21.1457 20.0937C21.1353 20.0989 21.1249 20.0989 21.1144 20.1042C21.0988 20.1094 21.0884 20.1146 21.0728 20.1198C21.0624 20.125 21.0467 20.1302 21.0363 20.1354C21.0259 20.1406 21.0103 20.1458 20.9999 20.151C20.9842 20.1562 20.9738 20.1614 20.9582 20.1666L20.927 20.1823C20.9113 20.1875 20.8957 20.1979 20.8853 20.2031C20.8749 20.2083 20.8697 20.2135 20.8593 20.2187C20.8436 20.2291 20.828 20.2343 20.8124 20.2448C20.802 20.25 20.7968 20.2552 20.7916 20.2604L20.7447 20.2916C20.7395 20.2968 20.7291 20.302 20.7239 20.3073C20.7082 20.3177 20.6926 20.3281 20.6822 20.3385C20.6718 20.3437 20.6666 20.3541 20.6562 20.3593C20.6457 20.3697 20.6301 20.3802 20.6197 20.3906C20.6093 20.401 20.5989 20.4114 20.5885 20.4166C20.578 20.427 20.5676 20.4322 20.5572 20.4427C20.5156 20.4791 20.4791 20.5208 20.4427 20.5572C20.4322 20.5676 20.427 20.578 20.4166 20.5885C20.4062 20.5989 20.3958 20.6093 20.3906 20.6197C20.3802 20.6301 20.3697 20.6457 20.3593 20.6562C20.3541 20.6666 20.3437 20.6718 20.3385 20.6822C20.3281 20.6978 20.3177 20.7134 20.3073 20.7239C20.302 20.7291 20.2968 20.7395 20.2916 20.7447L20.2604 20.7916C20.2552 20.7968 20.25 20.8072 20.2448 20.8124C20.2343 20.828 20.2291 20.8436 20.2187 20.8593C20.2135 20.8697 20.2083 20.8749 20.2031 20.8853C20.1979 20.9009 20.1875 20.9165 20.1823 20.927L20.1666 20.9582C20.1614 20.9738 20.1562 20.9842 20.151 20.9999C20.1458 21.0103 20.1406 21.0259 20.1354 21.0363C20.1302 21.0467 20.125 21.0624 20.1198 21.0728C20.1146 21.0884 20.1094 21.0988 20.1042 21.1144C20.0989 21.1249 20.0989 21.1353 20.0937 21.1457L20.0781 21.1926C20.0729 21.203 20.0729 21.2134 20.0677 21.2186C20.0625 21.2342 20.0573 21.2498 20.0521 21.2707C20.0521 21.2811 20.0469 21.2863 20.0469 21.2967C20.0417 21.3123 20.0365 21.3332 20.0365 21.3488C20.0365 21.3592 20.0312 21.3696 20.0312 21.3748C20.026 21.3904 20.026 21.4113 20.0208 21.4269C20.0208 21.4373 20.0156 21.4477 20.0156 21.4581C20.0156 21.4738 20.0104 21.4894 20.0104 21.505C20.0104 21.5206 20.0104 21.5311 20.0052 21.5467C20.0052 21.5571 20.0052 21.5727 20 21.5831V31.6651C20 32.5869 20.7447 33.3316 21.6664 33.3316C22.5882 33.3316 23.3329 32.5869 23.3329 31.6651V25.692L33.8992 36.2583C34.5502 36.9093 35.6073 36.9093 36.2583 36.2583C36.9093 35.6073 36.9093 34.5502 36.2583 33.8992L25.692 23.3329ZM36.2583 43.7365C35.6073 43.0855 34.5502 43.0855 33.8992 43.7365L23.3329 54.3028V48.3296C23.3329 47.4079 22.5882 46.6632 21.6664 46.6632C20.7447 46.6632 20 47.4079 20 48.3296V58.4117C20 58.4273 20 58.4377 20.0052 58.4481C20.0052 58.4637 20.0052 58.4742 20.0104 58.4898C20.0104 58.5054 20.0156 58.521 20.0156 58.5366C20.0156 58.5471 20.0156 58.5575 20.0208 58.5679C20.0208 58.5835 20.026 58.6043 20.0312 58.62C20.0312 58.6304 20.0365 58.6408 20.0365 58.646C20.0417 58.6616 20.0417 58.6825 20.0469 58.6981C20.0469 58.7085 20.0521 58.7137 20.0521 58.7241C20.0573 58.7397 20.0625 58.7554 20.0677 58.7762C20.0729 58.7866 20.0729 58.797 20.0781 58.8022L20.0937 58.8491C20.0989 58.8595 20.0989 58.8699 20.1042 58.8804C20.1094 58.896 20.1146 58.9064 20.1198 58.922C20.125 58.9324 20.1302 58.9481 20.1354 58.9585C20.1406 58.9689 20.1458 58.9845 20.151 58.9949C20.1562 59.0105 20.1614 59.021 20.1719 59.0366L20.1875 59.0678C20.1927 59.0835 20.2031 59.0991 20.2083 59.1095C20.2135 59.1199 20.2187 59.1251 20.2239 59.1355C20.2343 59.1512 20.2396 59.1668 20.25 59.1824C20.2552 59.1876 20.2604 59.198 20.2656 59.2032L20.2968 59.2501C20.302 59.2553 20.3073 59.2657 20.3125 59.2709C20.3229 59.2865 20.3333 59.3022 20.3437 59.3126C20.3489 59.323 20.3541 59.3282 20.3645 59.3386C20.375 59.349 20.3854 59.3647 20.3958 59.3751C20.4062 59.3855 20.4114 59.3959 20.4218 59.4063C20.4322 59.4167 20.4374 59.4272 20.4479 59.4376C20.4635 59.4584 20.4843 59.4792 20.5051 59.4949C20.526 59.5157 20.5468 59.5313 20.5624 59.5521C20.5728 59.5626 20.5833 59.5678 20.5937 59.5782C20.6041 59.5886 20.6145 59.599 20.6249 59.6042C20.6353 59.6146 20.651 59.625 20.6614 59.6355C20.6718 59.6407 20.677 59.6511 20.6874 59.6563C20.703 59.6667 20.7187 59.6771 20.7291 59.6875C20.7343 59.6927 20.7447 59.698 20.7499 59.7032L20.7968 59.7344C20.802 59.7396 20.8124 59.7448 20.8176 59.75C20.8332 59.7604 20.8488 59.7657 20.8645 59.7761C20.8749 59.7813 20.8801 59.7865 20.8905 59.7917C20.9061 59.7969 20.9218 59.8073 20.9322 59.8125L20.9634 59.8281C20.979 59.8334 20.9895 59.8386 21.0051 59.8438C21.0155 59.849 21.0311 59.8542 21.0415 59.8594C21.0519 59.8646 21.0676 59.8698 21.078 59.875C21.0936 59.8802 21.104 59.8854 21.1196 59.8906C21.1301 59.8958 21.1405 59.8958 21.1509 59.9011L21.1978 59.9167C21.2082 59.9219 21.2186 59.9219 21.2238 59.9271C21.2394 59.9323 21.255 59.9375 21.2759 59.9427C21.2863 59.9427 21.2915 59.9479 21.3019 59.9479C21.3175 59.9531 21.3384 59.9583 21.354 59.9583C21.3644 59.9583 21.3748 59.9635 21.38 59.9635C21.3957 59.9688 21.4165 59.9688 21.4321 59.974C21.4425 59.974 21.4529 59.9792 21.4634 59.9792C21.479 59.9792 21.4946 59.9844 21.5102 59.9844C21.5258 59.9844 21.5363 59.9844 21.5519 59.9896C21.5623 59.9896 21.5779 59.9896 21.5883 59.9948H31.6704C32.5921 59.9948 33.3368 59.2501 33.3368 58.3283C33.3368 57.4066 32.5921 56.6619 31.6704 56.6619H25.692L36.2583 46.0956C36.9093 45.4446 36.9093 44.3874 36.2583 43.7365Z"
            fill="url(#paint3_linear_115_4389)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_115_4389"
              x1="40"
              y1="0"
              x2="40"
              y2="80"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F0F9FD" />
              <stop offset="0.501082" stop-color="#444444" />
              <stop offset="1" stop-color="#E8E8E8" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_115_4389"
              x1="40"
              y1="6.09521"
              x2="40"
              y2="73.9047"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3E78D3" />
              <stop offset="1" stop-color="#1B2B69" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_115_4389"
              x1="40"
              y1="6.09521"
              x2="40"
              y2="73.9047"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#40C4C5" />
              <stop offset="0.49573" stop-color="#2379D8" />
              <stop offset="1" stop-color="#09A3DD" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_115_4389"
              x1="40"
              y1="20"
              x2="40"
              y2="59.9948"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.507169" stop-color="#A8D4F8" />
              <stop offset="1" stop-color="#A3C9FF" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default Header;
