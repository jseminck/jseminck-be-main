import _ from "lodash";
import getServerList from './../../utils/getServerList';

describe("getServerList()", function() {
    it("returns 5 objects", function() {
        expect(getServerList().length).toEqual(5);
    });

    it("contains the correct keys", function() {
        const firstServer = _.head(getServerList());

        expect(Object.keys(firstServer)).toEqual([
          "name", "link", "faIcon"
        ]);
    });
});