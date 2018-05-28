export const buildHierarchy = arry => {
    let roots = [];
    const children = {};

    // find the top level nodes and hash the children based on parent
    for (let i = 0, len = arry.length; i < len; ++i) {
        const item = arry[i];
        const p = item.previousId;
        const target = !p ? roots : (children[p] || (children[p] = []));

        target.push(item);
    }

    // function to recursively build the tree
    const findChildren = function (parent) {
        if (children[parent.id]) {
            parent.children = children[parent.id];
            for (let i = 0, len = parent.children.length; i < len; ++i) {
                findChildren(parent.children[i]);
            }
        }
    };

    // enumerate through to handle the case where there are multiple roots
    for (let i = 0, len = roots.length; i < len; ++i) {
        findChildren(roots[i]);
    }

    roots = roots.sort((a, b) => {
        if (a.dateUpdate > b.dateUpdate) {
            return 1;
        } else if (a.dateUpdate < a.dateUpdate) {
            return -1;
        } else {
            return 0;
        }
    });

    return roots;
}
