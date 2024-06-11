import { CoursesLsit } from "@/features/courses-list/pub/courses-list";
import { CreateCourseForm } from "@/features/courses-list/pub/create-course-form";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-8">
      <h1 className="text-3xl text-red-700 font-black">Courses</h1>

      <CreateCourseForm
        revalidatePagePaht="/"
        className="max-w-[300px] mb-10"
      />
      <CoursesLsit revalidatePagePaht="/" />
    </main>
  );
}
