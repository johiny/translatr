import debounce from "./debounce";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("[ utils / debounce ]", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  describe("when the function is called multiple times", () => {
    it("should call the function only once", () => {
      const func = vi.fn();
      const debouncedFunc = debounce(func, 100);

      debouncedFunc();
      debouncedFunc();
      debouncedFunc();

      vi.runAllTimers();
      // vi.advanceTimersByTime(100)

      expect(func).toHaveBeenCalledTimes(1);
    });
  });
});
