import React from 'react';
import { ExternalLink } from 'lucide-react';

const DesktopIcon = ({ project, onClick, inline = false }) => {
  // Links are anchors; everything else is a button, so each tile is
  // reachable by Tab and operable with Enter or Space.
  const IconContainer = project.openInNewTab ? 'a' : 'button';

  const handleClick = (e) => {
    e.stopPropagation();
    if (project.openInNewTab) return;
    onClick(project);
  };

  const positionStyle = inline ? {} : {
    position: 'absolute',
    left: `${project.position?.x}px`,
    top: `${project.position?.y}px`
  };

  const label = project.openInNewTab
    ? `${project.title} (opens in a new tab)`
    : `Open ${project.title}`;

  return (
    <IconContainer
      className={`desktop-icon ${project.isLink ? 'desktop-icon-link' : ''} ${inline ? 'desktop-icon-inline' : ''}`}
      onClick={handleClick}
      style={positionStyle}
      data-testid={`icon-${project.id}`}
      aria-label={label}
      {...(project.openInNewTab
        ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
        : { type: 'button' })}
    >
      <span className="desktop-icon-image">
        {project.logo ? (
          <img className="desktop-icon-logo" src={project.logo} alt="" />
        ) : (
          <span className="desktop-icon-emoji">{project.icon}</span>
        )}
        {project.isLink && (
          <span className="desktop-icon-link-badge">
            <ExternalLink size={10} />
          </span>
        )}
        {project.badge && (
          <span className={`desktop-icon-status-badge badge-${project.badge.color}`}>
            {project.badge.text}
          </span>
        )}
      </span>
      <span className="desktop-icon-label">{project.shortTitle || project.title}</span>
    </IconContainer>
  );
};

export default DesktopIcon;
