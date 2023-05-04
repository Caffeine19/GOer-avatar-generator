<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { IColor, IEffect, IEyes } from '@/types/avatar'
import type { PropType } from 'vue'

defineProps({
  color: { type: Object as PropType<IColor> },
  effect: { type: Object as PropType<IEffect> },
  radius: { type: Number },
  eyes: {
    type: Object as PropType<IEyes>
  }
})

const clipPathId =
  'clip' + (Math.random() * 100).toFixed(0) + '_' + (Math.random() * 100).toFixed(0)
const filterId =
  'filter' + (Math.random() * 100).toFixed(0) + '_' + (Math.random() * 100).toFixed(0)
</script>
<template>
  <svg viewBox="0 0 524 524" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Avatar" :clip-path="`url(#${clipPathId})`" :filter="`url(#${filterId})`">
      <rect width="524" height="524" :fill="color?.backgroundColor || '#D2F4F0'" />
      <g id="Index">
        <g id="Shadow" opacity="0.2">
          <g id="RightEar">
            <path
              id="Ellipse 6"
              d="M445.324 225.007C426.167 234.663 401.951 231.071 390.89 218.345C379.829 205.618 384.949 187.24 404.105 177.584C423.262 167.929 447.477 171.521 458.539 184.247C469.6 196.973 464.48 215.352 445.324 225.007Z"
              :fill="color?.primaryColor || '#61BCE2'"
              stroke="black"
              stroke-width="6.37119"
            />
            <ellipse
              id="Ellipse 7"
              cx="12.5277"
              cy="14.8672"
              rx="12.5277"
              ry="14.8672"
              transform="matrix(0.656007 0.754754 -0.89298 0.450096 427.311 182.529)"
              :fill="color?.secondaryColor || '#90D0EB'"
            />
          </g>
          <g id="LeftEar">
            <path
              id="Ellipse 6_2"
              d="M95.6829 204.119C105.67 223.104 127.47 234.244 143.865 230.308C160.261 226.372 166.766 208.437 156.779 189.451C146.792 170.465 124.992 159.326 108.597 163.262C92.2014 167.198 85.6957 185.133 95.6829 204.119Z"
              :fill="color?.primaryColor || '#61BCE2'"
              stroke="black"
              stroke-width="6.37119"
            />
            <ellipse
              id="Ellipse 7_2"
              cx="12.5277"
              cy="14.8672"
              rx="12.5277"
              ry="14.8672"
              transform="matrix(-0.972371 0.23344 0.465552 0.88502 135.016 179.999)"
              :fill="color?.secondaryColor || '#90D0EB'"
            />
          </g>
          <path
            id="Vector 1"
            d="M85.5939 549.973V553.449H89.0691H460.915H464.39V549.973V297.677C464.39 264.797 452.215 231.814 425.463 211.697C319.536 132.043 199.479 150.014 110.819 223.051C93.8391 237.039 85.5939 258.419 85.5939 280.038V549.973Z"
            :fill="color?.primaryColor || '#61BCE2'"
            stroke="black"
            stroke-width="6.95038"
          />
          <path
            id="Belly "
            d="M174.211 550C174.211 415.915 369.401 388.114 377.8 550H174.211Z"
            :fill="color?.secondaryColor || '#90D0EB'"
          />
          <g id="LeftEye">
            <path
              id="Sclera"
              d="M243.425 287.596C243.425 331.513 206.801 367.236 161.469 367.236C116.137 367.236 79.5122 331.513 79.5122 287.596C79.5122 243.68 116.137 207.957 161.469 207.957C206.801 207.957 243.425 243.68 243.425 287.596Z"
              fill="white"
              stroke="black"
              stroke-width="5.21279"
            />
            <g id="EyeBall">
              <circle id="Ellipse 3" cx="97.2994" cy="287.307" r="22.2992" fill="black" />
              <ellipse
                id="Ellipse 4"
                cx="91.797"
                cy="282.384"
                rx="9.26718"
                ry="8.68798"
                fill="white"
              />
            </g>
          </g>
          <g id="RightEye">
            <path
              id="Sclera_2"
              d="M474.236 291.072C474.236 334.658 439.795 369.843 397.492 369.843C355.189 369.843 320.748 334.658 320.748 291.072C320.748 247.485 355.189 212.301 397.492 212.301C439.795 212.301 474.236 247.485 474.236 291.072Z"
              fill="white"
              stroke="black"
              stroke-width="6.95038"
            />
            <g id="EyeBall_2">
              <circle id="Ellipse 3_2" cx="434.698" cy="291.072" r="30.6975" fill="black" />
              <ellipse
                id="Ellipse 4_2"
                cx="427.123"
                cy="284.294"
                rx="12.7574"
                ry="11.9601"
                fill="white"
              />
            </g>
          </g>
          <g id="Teeth">
            <path
              d="M263.408 387.609V368.168V361.734H281H301.056V385.099C301.056 388.757 300.327 392.577 297.788 395.21C293.664 399.49 289.269 398.213 281 390.687C274.72 396.46 270.942 398.433 265.466 392.983C264.054 391.579 263.408 389.6 263.408 387.609Z"
              fill="white"
            />
            <path
              d="M281 390.687C274.72 396.46 270.942 398.433 265.466 392.983C264.054 391.579 263.408 389.6 263.408 387.609V368.168V361.734H281M281 390.687V361.734M281 390.687C289.269 398.213 293.664 399.49 297.788 395.21C300.327 392.577 301.056 388.757 301.056 385.099V361.734H281"
              stroke="black"
              stroke-width="6.04772"
            />
          </g>
          <path
            id="Mouse"
            d="M252.383 368.095L276.011 364.523C281.119 363.751 286.318 363.81 291.407 364.699L308.098 367.613C312.56 368.392 317.134 367.111 320.543 364.129C322.174 362.701 323.086 360.574 322.686 358.443C316.24 324.08 255.492 326.81 241.355 355.711C240.986 356.467 240.819 357.306 240.819 358.147C240.819 364.302 246.297 369.015 252.383 368.095Z"
            fill="#C8BAAA"
            stroke="black"
            stroke-width="4.98887"
          />
          <path
            id="Nose"
            d="M304.555 328.686C304.65 332.386 302.535 336.037 298.538 338.904C294.552 341.762 288.875 343.682 282.449 343.847C276.023 344.012 270.254 342.387 266.127 339.737C261.988 337.079 259.688 333.542 259.593 329.842C259.497 326.142 261.613 322.492 265.61 319.625C269.595 316.767 275.273 314.847 281.699 314.682C288.125 314.517 293.894 316.142 298.021 318.792C302.16 321.45 304.46 324.987 304.555 328.686Z"
            fill="#53514F"
            stroke="black"
            stroke-width="4.25461"
          />
        </g>
        <g id="Substance">
          <g id="RightEar_2">
            <path
              id="Ellipse 6_3"
              d="M431.324 199.007C412.167 208.663 387.951 205.071 376.89 192.345C365.829 179.618 370.949 161.24 390.105 151.584C409.262 141.929 433.477 145.521 444.539 158.247C455.6 170.973 450.48 189.352 431.324 199.007Z"
              :fill="color?.primaryColor || '#61BCE2'"
              stroke="black"
              stroke-width="6.37119"
            />
            <ellipse
              id="Ellipse 7_3"
              cx="12.5277"
              cy="14.8672"
              rx="12.5277"
              ry="14.8672"
              transform="matrix(0.656007 0.754754 -0.89298 0.450096 413.311 156.529)"
              :fill="color?.secondaryColor || '#90D0EB'"
            />
          </g>
          <g id="LeftEar_2">
            <path
              id="Ellipse 6_4"
              d="M81.6829 178.119C91.67 197.104 113.47 208.244 129.865 204.308C146.261 200.372 152.766 182.437 142.779 163.451C132.792 144.465 110.992 133.326 94.5969 137.262C78.2014 141.198 71.6957 159.133 81.6829 178.119Z"
              :fill="color?.primaryColor || '#61BCE2'"
              stroke="black"
              stroke-width="6.37119"
            />
            <ellipse
              id="Ellipse 7_4"
              cx="12.5277"
              cy="14.8672"
              rx="12.5277"
              ry="14.8672"
              transform="matrix(-0.972371 0.23344 0.465552 0.88502 121.016 153.999)"
              :fill="color?.secondaryColor || '#90D0EB'"
            />
          </g>
          <path
            id="Vector 1_2"
            d="M71.5939 523.973V527.449H75.0691H446.915H450.39V523.973V271.677C450.39 238.797 438.215 205.814 411.463 185.697C305.536 106.043 185.479 124.014 96.8191 197.051C79.8391 211.039 71.5939 232.419 71.5939 254.038V523.973Z"
            :fill="color?.primaryColor || '#61BCE2'"
            stroke="black"
            stroke-width="6.95038"
          />
          <path
            id="Belly _2"
            d="M160.211 524C160.211 389.915 355.401 362.114 363.8 524H160.211Z"
            :fill="color?.secondaryColor || '#90D0EB'"
          />
          <g id="LeftEye_2">
            <path
              id="Sclera_3"
              d="M229.425 261.596C229.425 305.513 192.801 341.236 147.469 341.236C102.137 341.236 65.5122 305.513 65.5122 261.596C65.5122 217.68 102.137 181.957 147.469 181.957C192.801 181.957 229.425 217.68 229.425 261.596Z"
              fill="white"
              stroke="black"
              stroke-width="5.21279"
            />
            <g id="EyeBall_3">
              <circle
                id="Ellipse 3_3"
                :cx="83.2994 + (eyes?.leftEye?.x || 0)"
                :cy="261.307 + (eyes?.leftEye?.y || 0)"
                :r="(22.2992 * (eyes?.leftEye?.scale || 100)) / 100"
                fill="black"
              />
              <ellipse
                id="Ellipse 4_3"
                :cx="77.797 + (eyes?.leftEye?.x || 0)"
                :cy="256.384 + (eyes?.leftEye?.y || 0)"
                :rx="(9.26718 * (eyes?.leftEye?.scale || 100)) / 100"
                :ry="(8.68798 * (eyes?.leftEye?.scale || 100)) / 100"
                fill="white"
              />
            </g>
          </g>
          <g id="RightEye_2">
            <path
              id="Sclera_4"
              d="M460.236 265.072C460.236 308.658 425.795 343.843 383.492 343.843C341.189 343.843 306.748 308.658 306.748 265.072C306.748 221.485 341.189 186.301 383.492 186.301C425.795 186.301 460.236 221.485 460.236 265.072Z"
              fill="white"
              stroke="black"
              stroke-width="6.95038"
            />
            <g id="EyeBall_4">
              <circle
                id="Ellipse 3_4"
                :cx="420.698 + (eyes?.rightEye?.x || 0)"
                :cy="265.072 + (eyes?.rightEye?.y || 0)"
                :r="(30.6975 * (eyes?.rightEye?.scale || 100)) / 100"
                fill="black"
              />
              <ellipse
                id="Ellipse 4_4"
                :rx="(12.7574 * (eyes?.rightEye?.scale || 100)) / 100"
                :ry="(11.9601 * (eyes?.rightEye?.scale || 100)) / 100"
                :cx="413.123 + (eyes?.rightEye?.x || 0)"
                :cy="258.294 + (eyes?.rightEye?.y || 0)"
                fill="white"
              />
            </g>
          </g>
          <g id="Teeth_2">
            <path
              d="M249.408 361.609V342.168V335.734H267H287.056V359.099C287.056 362.757 286.327 366.577 283.788 369.21C279.664 373.49 275.269 372.213 267 364.687C260.72 370.46 256.942 372.433 251.466 366.983C250.054 365.579 249.408 363.6 249.408 361.609Z"
              fill="white"
            />
            <path
              d="M267 364.687C260.72 370.46 256.942 372.433 251.466 366.983C250.054 365.579 249.408 363.6 249.408 361.609V342.168V335.734H267M267 364.687V335.734M267 364.687C275.269 372.213 279.664 373.49 283.788 369.21C286.327 366.577 287.056 362.757 287.056 359.099V335.734H267"
              stroke="black"
              stroke-width="6.04772"
            />
          </g>
          <path
            id="Mouse_2"
            d="M238.383 342.095L262.011 338.523C267.119 337.751 272.318 337.81 277.407 338.699L294.098 341.613C298.56 342.392 303.134 341.111 306.543 338.129C308.174 336.701 309.086 334.574 308.686 332.443C302.24 298.08 241.492 300.81 227.355 329.711C226.986 330.467 226.819 331.306 226.819 332.147C226.819 338.302 232.297 343.015 238.383 342.095Z"
            fill="#C8BAAA"
            stroke="black"
            stroke-width="4.98887"
          />
          <path
            id="Nose_2"
            d="M290.555 302.686C290.65 306.386 288.535 310.037 284.538 312.904C280.552 315.762 274.875 317.682 268.449 317.847C262.023 318.012 256.254 316.387 252.127 313.737C247.988 311.079 245.688 307.542 245.593 303.842C245.497 300.142 247.613 296.492 251.61 293.625C255.595 290.767 261.273 288.847 267.699 288.682C274.125 288.517 279.894 290.142 284.021 292.792C288.16 295.45 290.46 298.987 290.555 302.686Z"
            fill="#53514F"
            stroke="black"
            stroke-width="4.25461"
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        :id="filterId"
        x="0"
        y="0"
        width="546"
        height="546"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          :stdDeviation="effect?.blur || 0"
          result="effect1_foregroundBlur_301_2507"
        />
      </filter>
      <clipPath :id="clipPathId">
        <rect width="524" height="524" :rx="radius || 0" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>
