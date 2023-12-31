import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
      <center>
        <br></br>
        <br></br>
      <div className="flex justify-center items-center bg-slate-300">
        <center>
        <h2 className="text-blue-500">
نماد های معتبری که بازی توانسته است کسب نماید 
        </h2>
        </center>
        <img src="https://sahand.storage.iran.liara.space/hedospace/picture/156853bonyad%20logo%20500x500.png" alt="نماد های معتبر" width="150px" height="150px"></img>
        <img src="https://sahand.storage.iran.liara.space/hedospace/picture/enamad-1.png" alt="نماد های معتبر" width="150px" height="150px"></img>
        <img src="https://sahand.storage.iran.liara.space/hedospace/picture/rasane.png" alt="نماد های معتبر" width="150px" height="150px"></img>
    </div>
    </center>
    <br></br>
    <br></br>
      <center>
<footer className="text-white-500">
    تمامی حقوق کاربران برای وب سایت <a href="https://hedospace.liara.run/" className="text-green-500">هیدوسپیس</a> محفوظ می باشد 
</footer>
    <h2 className="text-yellow-500 ">
        طراحی شده توسط سهند محمدرضایی و اسماعیل صابری
    </h2>
</center>
    </div>
  );
};

export default StarsCanvas;
