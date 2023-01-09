import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const [isSideBarVisible, setIsSideBarVisible] = useState<boolean>(false);
  const { slug } = useParams<{ slug: string }>();

  function handleResize() {
    if (window.innerWidth > 768) {
      setIsSideBarVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        isSideBarVisible={isSideBarVisible}
        setIsSideBarVisible={setIsSideBarVisible}
      />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} isSideBarVisible={isSideBarVisible} />
        ) : (
          <div className="flex-1" />
        )}
        <Sidebar isOpen={isSideBarVisible} />
      </main>
    </div>
  );
}
