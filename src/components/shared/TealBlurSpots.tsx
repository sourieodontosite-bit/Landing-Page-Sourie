export default function TealBlurSpots() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#1e5661]" aria-hidden="true">
      {/* Rich and Vibrant Teal Atmosphere */}
      <div 
        className="absolute top-[-20%] left-[-20%] w-[120vw] h-[100vw] rounded-full bg-[#2a7888]/20 blur-[150px] animate-pulse-subtle"
      />
      
      <div 
        className="absolute top-[20%] right-[-30%] w-[110vw] h-[110vw] rounded-full bg-teal-dark/20 blur-[180px]"
      />

      <div 
        className="absolute top-[40%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-teal-primary/25 blur-[140px]"
      />

      <div 
        className="absolute bottom-[-20%] right-[-10%] w-[100vw] h-[100vw] rounded-full bg-[#1e5661]/30 blur-[160px] animate-pulse-subtle"
      />

      {/* Bright teal accent */}
      <div 
        className="absolute top-[10%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-cyan-light/10 blur-[120px]"
      />
      
      <div 
        className="absolute bottom-[30%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-teal-medium/15 blur-[130px]"
      />
    </div>




  );
}
