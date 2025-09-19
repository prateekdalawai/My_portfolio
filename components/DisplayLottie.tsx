import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Import react-lottie dynamically (client-side only)
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

type Props = {
  animationPath: string;
};

type AnimationData = Record<string, unknown>;

const DisplayLottie: React.FC<Props> = ({ animationPath }) => {
  const [animationData, setAnimationData] = useState<AnimationData | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadAnimation = async () => {
      setAnimationData(null);

      try {
        const response = await fetch(animationPath, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Failed to load animation: ${response.status} ${response.statusText}`);
        }

        const data = (await response.json()) as AnimationData;
        setAnimationData(data);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error(`Unable to load Lottie animation from ${animationPath}`, error);
        }
      }
    };

    loadAnimation();

    return () => {
      controller.abort();
    };
  }, [animationPath]);

  if (!animationData) {
    return null; // while loading, render nothing (you can add a loader here if you want)
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <div role="presentation">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default DisplayLottie;
