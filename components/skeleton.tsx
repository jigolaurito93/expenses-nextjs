interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-md ${className}`}
    ></div>
  );
};

export default Skeleton;
