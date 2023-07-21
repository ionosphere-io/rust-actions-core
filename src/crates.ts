export interface Crate {
    categories: Category[];
    crate: CrateInfo;
    keywords: Keyword[];
    versions: Version[];
}

export interface Category {
    category: string;
    crates_cnt: number;
    created_at: string;
    description: string;
    id: string;
    slug: string;
}

export interface CrateInfo {
    badges: string[];
    categories: string[];
    created_at: string;
    description: string | null;
    documentation: string | null;
    downloads: number;
    exact_match: boolean;
    homepage: string | null;
    id: string;
    keywords: string[];
    links: CrateLinks;
    max_stable_version: string | null;
    max_version: string | null;
    name: string;
    newest_version: string | null;
    recent_downloads: number;
    repository: string | null;
    updated_at: string | null;
    versions: number[];
}

export interface Keyword {
    crates_cnt: number;
    created_at: string;
    id: string;
    keyword: string;
}

export interface Version {
    audit_actions: AuditAction[];
    checksum: string;
    crate: string;
    crate_size: number;
    created_at: string;
    dl_path: string;
    downloads: number;
    features: Map<string, string[]>;
    id: number;
    license: string;
    links: VersionLinks;
    num: string;
    published_by: User;
    readme_path: string;
    rust_version: string | null;
    updated_at: string | null;
    yanked: boolean;
}

export interface CrateLinks {
    owner_team: string;
    owner_user: string;
    owners: string;
    reverse_dependencies: string;
    version_downloads: string;
    versions: string | null;
}

export interface AuditAction {
    action: string;
    time: string;
    user: User;
}

export interface VersionLinks {
    authors: string;
    dependencies: string;
    version_downloads: string;
}

export interface User {
    avatar: string | null;
    id: number;
    login: string;
    name: string | null;
    url: string | null;
}
