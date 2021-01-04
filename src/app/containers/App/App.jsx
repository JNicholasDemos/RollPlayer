/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import * as styles from "./App.styles";
import React, { Suspense, lazy } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

const PlayerCharacterView = lazy(() =>
  import("../PlayerCharacter/PlayerCharacter")
);

const App = () => {
  return (
    <div css={styles.App}>
      <div id="header" css={styles.Appheader}></div>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={["/", "/pc/"]}>
            <PlayerCharacterView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default withRouter(App);
