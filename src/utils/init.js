const routerPath2 = [

];
export const pushRouter = (path, name, component) => {
    routerPath2.push(
        {
            path: path,
            name: name,
            component: () => import(component),
        }
    );
}

export const routerPath = routerPath2;