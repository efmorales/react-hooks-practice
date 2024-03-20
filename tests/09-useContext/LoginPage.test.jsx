import { render, screen, fireEvent } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("Tests in <LoginPage />", () => {

    const newUser = {
        id: 123,
        name: "Roy Mustang",
        email: "roy123@hey.com",
    };

    test("should display the initial component correctly", () => {
        render(
            <UserContext.Provider value={{ user: {} }}>
                <LoginPage />
            </UserContext.Provider>
        );

        expect(screen.getByText("LoginPage")).toBeTruthy();
        expect(screen.getByLabelText("pre").innerHTML).toBe("{}");
    });

    test("Function setUser should be called", () => {
        const setUser = jest.fn();

        render(
            <UserContext.Provider value={{
                user: newUser,
                setUser
            }}>
                <LoginPage />
            </UserContext.Provider>
        );

        fireEvent.click(screen.getByText("Set User"));

        screen.debug();

        expect(setUser).toHaveBeenCalledWith(newUser);
    }
    );

});
