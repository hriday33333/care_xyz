import Container from '@/Components/shared/Container';

const Loading = () => {
  return (
    <Container>
      <div className="flex items-center justify-center h-screen bg-transparent">
        <div className="relative w-20 h-20">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-4 border-t-pink-500 border-r-red-500 border-b-transparent border-l-transparent animate-spin"></div>

          {/* Heart icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="url(#grad)"
              className="w-8 h-8 animate-pulse"
            >
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF1532" />
                  <stop offset="100%" stopColor="#801617" />
                </linearGradient>
              </defs>
              <path d="M12 21s-7.5-4.35-10-9C.5 7.5 3.5 4 7 5.5 9 6.5 12 10 12 10s3-3.5 5-4.5c3.5-1.5 6.5 2 5 6.5-2.5 4.65-10 9-10 9z" />
            </svg>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Loading;
