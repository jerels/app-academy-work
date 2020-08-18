class DirectoryTreeNode {
    constructor(name, type, lastModTime) {
        this.name = name;
        this.type = type;
        this.lastModTime = lastModTime;
        this.children = [];
    }

    getIconType() {
        if (this.type === "directory") return this.name;
        if (this.type === "file") {
            const dotIdx = this.name.lastIndexOf(".");
            if (dotIdx >= 0) return this.name.substring(dotIdx + 1).toLowerCase();
            return this.name;

        }
        return "";
    }

    addChild(child) {
        this.children.push(child);
    }
}

const root = new DirectoryTreeNode();

window.addEventListener("DOMContentLoaded", async () => {
    const overlay = document.querySelector(".overlay");

    try {
        const res = await fetch("/api/path");
        if (res.ok) {
            const files = await res.json();
            for (let file of files) {
                const { name, type, lastModTime } = file;
                const node = new DirectoryTreeNode(name, type, lastModTime);
                root.addChild(node);
            }
            overlay.classList.add("overlay--hidden");
        }
        const uiRoot = document.querySelector(".soil");
        updateVisualTree(uiRoot, root);
    } catch (e) {
        console.error(e);
        overlay.classList.add("overlay--error");
    }
});


function updateVisualTree(el, directoryTreeNode) {
    const ul = document.createElement("ul");
    ul.classList.add("tree");
    for (let child of directoryTreeNode.children) {
        updateVisualTreeEntry(ul, child);
    }
    el.appendChild(ul);
}

function updateVisualTreeEntry(treeEl, child) {
    const li = document.createElement("li");
    li.classList.add("leaf");

    if (child.type === "file") {
        li.innerHTML = `
        <div class="leaf__disclosure leaf__disclosure--disabled></div>
        <img class="leaf__icon" src="/icons/folder_type_${child.getIconType()}.svg">
        <div class="leaf__name">${child.name}</div>
        <div class="leaf__time">${child.lastModTime}</div>
        `;
    } else if (child.type === "directory") {
        li.innerHTML = `
        <div class="leaf__disclosure leaf__disclosure--closed"></div>
        <img class="leaf__icon" src="/icons/folder_type_${child.getIconType()}.svg">
        <div class="leaf__name">${child.name}</div>
        <div class="leaf__time">${child.lastModTime}</div>
        `;
    }
    treeEl.appendChild(li);
}
