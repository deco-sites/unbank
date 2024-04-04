import { useEffect, useState } from "preact/hooks";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const endDate = new Date("2024-04-21T20:59:59").getTime();

  function formatTime(time: number): string {
    return time < 10 ? `0${time}` : `${time}`;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <p className="font-abel font-normal text-[#FAFAFA] text-[56px] leading-none">
      <span>{formatTime(timeLeft.days)}</span>
      <span className="text-gray-400">D</span>
      <span>{formatTime(timeLeft.hours)}</span>
      <span className="text-gray-400">H</span>
      <span>{formatTime(timeLeft.minutes)}</span>
      <span className="text-gray-400">M</span>
      <span>{formatTime(timeLeft.seconds)}</span>
      <span className="text-gray-400">S</span>
    </p>
  );
};

export default Countdown;