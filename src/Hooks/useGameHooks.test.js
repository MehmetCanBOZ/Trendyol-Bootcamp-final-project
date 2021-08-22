import { renderHook } from "@testing-library/react-hooks";
import useGameHooks from "./useGameHooks";

jest.useFakeTimers();

describe("useGameHooks tests", () => {
  it("verifies that it renders", () => {
    const { result } = renderHook(() => useGameHooks());
    const { time ,game, setGame , interval } = result.current;
    expect(time).toBeDefined();
    expect(game).toBeDefined();
    expect(setGame).toBeDefined();
    expect(interval).toBeDefined();
  });
});