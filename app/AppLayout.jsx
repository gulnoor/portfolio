import ContextPanel from "@/components/ContextPanel/ContextPanel";
import NavRail from "@/components/NavRail/NavRail";

const AppLayout = ({ children }) => {
  return (
    <>
      <NavRail />

        <ContextPanel >
        {children}
        </ContextPanel>
   
    </>
  );
};

export default AppLayout;
