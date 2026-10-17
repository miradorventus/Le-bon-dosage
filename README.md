# Le Bon Dosage

Calculs de chantier pour maçons, sur le téléphone : combien de sacs, de seaux d'eau, de m³ ou de tonnes pour un chantier de maison individuelle.

**Version 0.10.4 (prototype)** · fait avec un maçon, pour de vrais chantiers.

## Ce qu'elle calcule
- **Crépi / enduit** : sacs et eau, avec les valeurs des fiches Weber (pral F, weberlite F et G), ParexLanko ou tes propres produits.
- **Colle à carrelage** : selon la taloche (6x6, 9x9, demi-lune) et le simple ou double encollage (Weber.col plus, col flex éco).
- **Joints de carrelage** : kilos de joint selon le format du carreau, la largeur du joint et l'épaisseur (joints Edilis fin et rustic).
- **Semelles et dalles** : béton à la bétonnière, au sable + gravier ou au mélange à béton 0/20 (recette de la fiche Lafarge).
- **Chape** : en sacs à la bétonnière, ou en m³ à commander à la toupie.
- **Granulats** : castine, tout-venant, sable, gravier, en tonnes et en m³.
- **Parpaings et briques** : nombre de blocs et mortier de montage.
- **Treillis soudé** : nombre de panneaux selon la référence (PAF, ST 25 C...), recouvrement compris.
- **Ouverture dans un mur** : béton et cages d'acier du linteau et des jambages (murs en pierre compris).
- **Poteaux, chaînages, linteaux** : cages d'acier (HA 6 à 12), béton, ciment.

L'eau est donnée **en seaux** (taille du seau réglable), et **par sac**.

## En plus
- **Liste de courses** qui additionne tous les ouvrages d'un chantier, avec le détail par ouvrage pour un devis, à envoyer par SMS, WhatsApp ou dans Notes.
- **Possibilités enregistrées** : garde un réglage pour le retrouver plus tard.
- **Mes produits** : recopie ce qui est écrit sur ton sac.
- **Sauvegarde** dans Notes et restauration.

## Respect de tes données
Aucun compte, aucune pub, aucun cookie. Tes calculs, tes produits et ta liste restent dans ton téléphone : rien n'en sort sans que tu appuies toi-même sur « Partager ». Seul un compteur de visites anonyme ([GoatCounter](https://www.goatcounter.com), sans cookies) compte les ouvertures de la page, pour savoir si l'appli sert.

## Installer l'appli
Il faut du réseau seulement la première fois. Ensuite, elle marche sans réseau.
- **iPhone** : ouvre le lien dans **Safari**, appuie sur Partager, puis « Sur l'écran d'accueil ».
- **Android** : ouvre le lien dans **Chrome**, menu ⋮, puis « Installer l'application » (ou « Ajouter à l'écran d'accueil »).

## Avertissement
Les quantités sont **indicatives**. Vérifie toujours les indications de l'emballage, les plans et les règles de l'art. Appli indépendante, sans lien avec les marques citées (Weber, Lafarge...), dont les chiffres viennent de leurs fiches techniques publiques.

## Technique
Une seule page HTML, sans dépendance ni serveur. Mode hors ligne par service worker (`sw.js`) : changer `VERSION` à chaque mise à jour.

## Licence
[MIT](LICENSE) : tu peux utiliser, modifier et partager ce code librement, en gardant la mention de l'auteur.
