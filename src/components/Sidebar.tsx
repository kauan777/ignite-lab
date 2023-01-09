import { Lesson } from "./Lesson";
import { useGetlessonsQuery } from "../graphql/generated";

//lessons = set of objects

interface SideBarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SideBarProps) {
  const { data } = useGetlessonsQuery();

  return (
    //Para larguras fora do tailwind | Ex: w-[348px]
    <aside className={`${isOpen ? "block translate-x-0 w-full" : "hidden translate-x-[100%]"} md:block md:w-[348px]  md:translate-x-0 bg-gray-700 p-6 border-l border-gray-600 transition-all`}>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
