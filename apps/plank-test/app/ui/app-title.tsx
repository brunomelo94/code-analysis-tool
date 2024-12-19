type AppTitleProps = {
  title: string;
};

export default function AppTitle({ title }: AppTitleProps) {
  return (
    <h1
      className="
        text-4xl sm:text-4xl font-extrabold text-center mb-8
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
        bg-clip-text text-transparent
      "
    >
      {title}
    </h1>
  );
}
