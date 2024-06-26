import { revalidatePath } from "next/cache";
import { coursesRepository } from "../courses.repository";
import { CourseItem } from "../ui/course-item";

export async function CoursesLsit({
  revalidatePagePaht,
}: {
  revalidatePagePaht: string;
}) {
  const coursesLsit = await coursesRepository.getCoursesList();

  const handleDeleteAction = async (courseId: string) => {
    "use server";

    await coursesRepository.deleteCourseElement({ id: courseId });

    revalidatePath(revalidatePagePaht);
  };
  return (
    <div className="flex flex-col gap-3">
      {coursesLsit.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          onDelete={handleDeleteAction.bind(null, course.id)}
        />
      ))}
    </div>
  );
}
