interface WaveDividerProps {
  fromColor: string;
  toColor: string;
  variant?: 'curve' | 'redblue';
}

export default function WaveDivider({ fromColor, toColor, variant = 'curve' }: WaveDividerProps) {
  if (variant === 'redblue') {
    return (
      <div style={{ background: fromColor, lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '70px' }}
        >
          <path
            d="M0,70 L0,35 C360,0 720,70 1080,35 C1260,17 1380,42 1440,35 L1440,70 Z"
            fill="#C0392B"
            opacity="0.9"
          />
          <path
            d="M0,70 L0,50 C360,20 720,70 1080,50 C1260,38 1380,58 1440,50 L1440,70 Z"
            fill={toColor}
          />
        </svg>
      </div>
    );
  }

  return (
    <div style={{ background: fromColor, lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 50"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '50px' }}
      >
        <path
          d="M0,50 C480,0 960,50 1440,0 L1440,50 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}