import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" center className="flex flex-col justify-center items-center">
      <span className="canvas-loader"></span>
      <p className="text-[14px] text-[#F1F1F1] font-bold mt-10">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};
export default CanvasLoader;
