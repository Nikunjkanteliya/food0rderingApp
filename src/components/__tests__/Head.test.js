import { Provider } from "react-redux";
import Header from "../Header";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utilis/store";
import { render } from "@testing-library/react";
import Body from "../Body";
test("Header img loaded ", () => {
  const head = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const headImg = head.getByTestId("headerSrc");
  expect(headImg.src).toBe(
    "https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"
  );
});

test("shimmerEffect", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmerEffect");
  console.log(shimmer);
  // expect(cart.innerHTML).toBe("");
});
