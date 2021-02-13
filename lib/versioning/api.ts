import * as cargo from './cargo';
import { VersioningApi, VersioningApiConstructor } from './common';
import * as composer from './composer';
import * as docker from './docker';
import * as git from './git';
import * as gradle from './gradle';
import * as hashicorp from './hashicorp';
import * as hex from './hex';
import * as ivy from './ivy';
import * as loose from './loose';
import * as maven from './maven';
import * as node from './node';
import * as npm from './npm';
import * as nuget from './nuget';
import * as pep440 from './pep440';
import * as poetry from './poetry';
import * as regex from './regex';
import * as ruby from './ruby';
import * as semver from './semver';
import * as swift from './swift';
import * as ubuntu from './ubuntu';

const api = new Map<string, VersioningApi | VersioningApiConstructor>();

export default api;

api.set('cargo', cargo.api);
api.set('composer', composer.api);
api.set('docker', docker.api);
api.set('git', git.api);
api.set('gradle', gradle.api);
api.set('hashicorp', hashicorp.api);
api.set('hex', hex.api);
api.set('ivy', ivy.api);
api.set('loose', loose.api);
api.set('maven', maven.api);
api.set('node', node.api);
api.set('npm', npm.api);
api.set('nuget', nuget.api);
api.set('pep440', pep440.api);
api.set('poetry', poetry.api);
api.set('regex', regex.api);
api.set('ruby', ruby.api);
api.set('semver', semver.api);
api.set('swift', swift.api);
api.set('ubuntu', ubuntu.api);
