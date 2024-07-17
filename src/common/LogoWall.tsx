import { Fade } from 'react-awesome-reveal';

interface LogoWallProps {
  src1: string;
  src2: string;
  src3: string;
  alt1: string;
  alt2: string;
  alt3: string;
}

const LogoWall: React.FC<LogoWallProps> = ({ src1, src2, src3, alt1, alt2, alt3 }) => {
  return (
    <div className="flex justify-center space-x-4 space-y-2">
      <Fade triggerOnce>
        <img src={src1} alt={alt1} className="h-28 w-auto mx-auto" />
      </Fade>
      <Fade triggerOnce>
        <img src={src2} alt={alt2} className="h-28 w-auto mx-auto" />
      </Fade>
      <Fade triggerOnce>
        <img src={src3} alt={alt3} className="h-28 w-auto mx-auto" />
      </Fade>
    </div>
  );
};

export default LogoWall;
