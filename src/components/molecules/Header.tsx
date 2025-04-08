export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="bg-global-header-background text-global-header-foreground p-2.5 relative">
    { children }
   </div> 
  );
}
