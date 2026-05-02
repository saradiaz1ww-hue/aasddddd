import { FunctionComponent } from "react";
import styles from "./Footercatalogoproductos.module.css";

export type FootercatalogoproductosType = {
  className?: string;
};

const Footercatalogoproductos: FunctionComponent<FootercatalogoproductosType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.heading3}>
            <b className={styles.metalMecnicaEl}>metal mecánica el imperio</b>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.proveedorLderDe}>
              Proveedor líder de componentes electrónicos e industriales para
              empresas.
            </div>
          </div>
        </div>
        <div className={styles.containerParent}>
          <div className={styles.container3}>
            <div className={styles.heading4}>
              <div className={styles.productos}>Productos</div>
            </div>
            <div className={styles.list}>
              <div className={styles.listItem}>
                <div className={styles.bisagras}>Bisagras</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.bisagras}>Bujes</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.bisagras}>Soportes</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.bisagras}>Lengüetas</div>
              </div>
            </div>
          </div>
          <div className={styles.container4}>
            <div className={styles.heading4}>
              <div className={styles.empresa}>Empresa</div>
            </div>
            <div className={styles.list2}>
              <div className={styles.listItem}>
                <div className={styles.bisagras}>Quiénes Somos</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.bisagras}>Certificaciones</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.bisagras}>Clientes</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container4}>
          <div className={styles.heading4}>
            <div className={styles.contacto}>Contacto</div>
          </div>
          <div className={styles.list2}>
            <div className={styles.listItem}>
              <div className={styles.bisagras}>
                contacto@industrialparts.com
              </div>
            </div>
            <div className={styles.listItem}>
              <div className={styles.bisagras}>+34 900 123 456</div>
            </div>
            <div className={styles.listItem}>
              <div className={styles.bisagras}>Lun-Vie: 8:00 - 18:00</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container6}>
        <div className={styles.bisagras}>
          © 2026 metal mecánica el imperio. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footercatalogoproductos;
