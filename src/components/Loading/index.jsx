import styles from "./Loading.module.scss";

import { useLoading } from "@/store/ui/hooks";

export default function Loading() {
    const loading = useLoading();

    if (!loading) return null;

    return <div className={styles.wrapper}/>
}
