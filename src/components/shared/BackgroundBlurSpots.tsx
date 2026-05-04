export default function BackgroundBlurSpots() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Very subtle amorphous blue blur spots */}
      <div 
        className="absolute top-[-10%] left-[-20%] w-[80vw] h-[70vw] rounded-full bg-teal-primary/[0.04] blur-[100px]"
      />
      
      <div 
        className="absolute top-[35%] right-[-25%] w-[90vw] h-[80vw] rounded-full bg-navy-dark/[0.03] blur-[120px]"
      />

      <div 
        className="absolute top-[15%] right-[5%] w-[40vw] h-[35vw] rounded-full bg-teal-dark/[0.04] blur-[80px]"
      />

      <div 
        className="absolute bottom-[-15%] left-[-10%] w-[75vw] h-[65vw] rounded-full bg-teal-primary/[0.04] blur-[110px]"
      />

      <div 
        className="absolute top-[70%] left-[10%] w-[50vw] h-[45vw] rounded-full bg-teal-medium/[0.04] blur-[90px]"
      />
    </div>
  );
}
